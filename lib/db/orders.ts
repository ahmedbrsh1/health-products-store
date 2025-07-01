import connect from "../db/connect";
import Order from "../../models/Order";

export async function makeOrder(userId: string, products: any[]) {
  await connect();
  const order = new Order({ userId, products });
  await order.save();
  return order;
}

export async function getOrders(userId: string) {
  await connect();
  return await Order.find({ userId }).populate("products.productId");
}
