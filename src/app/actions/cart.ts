"use server";

import { makeOrder } from "../../../lib/db/orders";
import { getProductsByIds } from "../../../lib/db/products";
import { isEmpty } from "../lib/validation";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
export async function getProductsFromIds(ids: string[]) {
  if (!Array.isArray(ids) || ids.length === 0) {
    throw new Error("Invalid parameters");
  }

  const products = await getProductsByIds(ids);

  if (products.length === 0) {
    throw new Error("No products found");
  }

  return products;
}

export async function submitFormAction(
  prevState: { success: boolean; message?: string; orderId?: string },
  data: {
    fullname: string | undefined;
    phonenumber: string | undefined;
    address: string | undefined;
    operator: string | undefined;
    delivery: string | undefined;
    products: { productId: string; size: number; quantity: number }[];
  }
): Promise<{ success: boolean; message?: string; orderId?: string }> {
  try {
    if (data.products.length < 1) {
      return { success: false, message: "Cart is empty!" };
    }
    if (
      isEmpty(data.fullname) ||
      isEmpty(data.phonenumber) ||
      isEmpty(data.address) ||
      isEmpty(data.operator) ||
      isEmpty(data.delivery)
    ) {
      return { success: false, message: "Missing fields!" };
    }

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    if (!token) {
      return { success: false, message: "User not signed in" };
    }

    const { userId } = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: string;
    };

    const result = await makeOrder(
      userId,
      data.products,
      data.operator!,
      data.delivery!
    );

    return { success: true, orderId: result };
  } catch {
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
