import connect from "../db/connect";
import Order from "../../models/Order";
import Product from "../../models/Product";
import mongoose from "mongoose";
import { IOrder } from "../../models/Order";
import { IUser } from "../../models/User";
import { IProduct } from "../../models/Product";
function formatOrderNumber(sequence: number): string {
  const padded = sequence.toString().padStart(4, "0");
  return `732-123-${padded}`;
}

export async function makeOrder(
  userId: string,
  products: { productId: string; size: number; quantity: number }[],
  operator: string,
  delivery: string
) {
  await connect();

  let totalPrice = 0;
  const processedProducts = [];

  for (const item of products) {
    const product = await Product.findById(item.productId);
    if (!product) continue;

    const sizeIndex = product.sizes.indexOf(item.size);
    if (sizeIndex === -1) continue;

    const unitPrice = product.prices[sizeIndex];
    const totalItemPrice = unitPrice * item.quantity;

    totalPrice += totalItemPrice;

    processedProducts.push({
      productId: item.productId,
      size: item.size,
      quantity: item.quantity,
      totalItemPrice, // ✅ new field added per item
    });
  }

  const deliveryFee = delivery === "instant" ? 22 : 12;
  totalPrice += deliveryFee;

  // Get last order to determine next order number
  const lastOrder = await Order.findOne().sort({ createdAt: -1 });
  let lastSequence = 0;

  if (lastOrder?.orderNumber) {
    const match = lastOrder.orderNumber.match(/(\d{4})$/);
    if (match) {
      lastSequence = parseInt(match[1], 10);
    }
  }

  const nextOrderNumber = formatOrderNumber(lastSequence + 1);

  const order = new Order({
    userId,
    products: processedProducts, // ✅ use modified product array
    operator,
    delivery,
    orderNumber: nextOrderNumber,
    totalPrice,
  });

  await order.save();
  return nextOrderNumber;
}

export async function getOrders(userId: string) {
  await connect();
  return await Order.find({ userId }).populate("products.productId");
}

// lib/db/orders.ts

import { verifyAuthToken } from "./verifyAuthTokens";

import { cookies as getCookies } from "next/headers";
import User from "../../models/User";

export async function getOrderDetails(
  orderNumber: string,
  cookieStore?: ReturnType<typeof getCookies>
) {
  await connect();

  const cookieJar = cookieStore;
  const token = (await cookieJar)?.get("token")?.value;
  if (!token) return null;

  let id: string;

  try {
    const { userId } = verifyAuthToken(token);
    id = userId;
  } catch (err) {
    console.error("Invalid token", err);
    return null;
  }

  const order = await Order.findOne({ orderNumber }).lean<IOrder>(); // use `.lean()` for easier modification
  if (!order) return null;
  if (order.userId.toString() !== id) return null;

  // ✅ Fetch customer name
  const user = await User.findById(order.userId).lean<IUser>();
  const customerName = user
    ? `${user.fname} ${user.lname}`
    : "Unknown Customer";

  // ✅ Enrich each product with its first image
  const enrichedProducts = await Promise.all(
    order.products.map(async (item: any) => {
      const product = await Product.findById(item.productId).lean<IProduct>();
      const image = product?.images?.[0] || null;
      const title = product?.title || null;
      return {
        ...item,
        image,
        title,
      };
    })
  );

  // ✅ Return enriched order object
  return {
    ...order,
    products: enrichedProducts,
    customerName,
  };
}

// lib/db/getUserOrders.ts
// lib/db/getUserOrders.ts

import { IOrderItem } from "../../models/OrderItem";

interface SimplifiedOrder {
  orderNumber: string;
  totalPrice: number;
  createdAt: Date;
  products: {
    productId: mongoose.Types.ObjectId;
    quantity: number;
    size: number;
    totalItemPrice: number;
    title: string;
    image: string;
  }[];
}

export async function getUserOrders(
  cookieStore: ReturnType<typeof getCookies>
): Promise<SimplifiedOrder[] | null> {
  await connect();

  const token = (await cookieStore).get("token")?.value;
  if (!token) return null;

  let userId: string;
  try {
    const decoded = verifyAuthToken(token); // returns { id: string }
    userId = decoded.userId;
  } catch (err) {
    console.error("Invalid token", err);
    return null;
  }

  const orders = await Order.find({ userId }).lean();

  const result: SimplifiedOrder[] = [];

  for (const order of orders) {
    const enrichedProducts = await Promise.all(
      order.products.map(async (item: IOrderItem) => {
        const product = await Product.findById(item.productId).lean<{
          title: string;
          images: string[];
        } | null>();
        return {
          productId: item.productId,
          quantity: item.quantity,
          size: item.size,
          totalItemPrice: item.totalItemPrice,
          title: product?.title ?? "Unknown",
          image: product?.images?.[0] ?? null,
        };
      })
    );

    result.push({
      orderNumber: order.orderNumber,
      totalPrice: order.totalPrice,
      createdAt: order.createdAt,
      products: enrichedProducts,
    });
  }

  return result;
}
