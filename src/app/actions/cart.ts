"use server";

import { getProductsByIds } from "../../../lib/db/products";

export default async function getProductsFromIds(ids: string[]) {
  if (!Array.isArray(ids) || ids.length === 0) {
    throw new Error("Invalid parameters");
  }

  const products = await getProductsByIds(ids);

  if (products.length === 0) {
    throw new Error("No products found");
  }

  return products;
}
