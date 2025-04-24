import connect from "../db/connect";
import Product from "../../models/Product";

export async function getAllProducts() {
  await connect();
  return await Product.find();
}

export async function getProductById(id: string) {
  await connect();
  return await Product.findById(id);
}
