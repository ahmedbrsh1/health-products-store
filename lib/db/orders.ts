import connect from "../db/connect";
import Order from "../../models/Order";

export async function makeOrder(
  userId: string,
  products: any[],
  totalPrice: number
) {
  await connect();
  const order = new Order({ userId, products, totalPrice });
  await order.save();
  return order;
}

export async function getOrders(userId: string) {
  await connect();
  return await Order.find({ userId }).populate("products.productId");
}
