"use server";

import { getProductsByIds } from "../../../lib/db/products";
import { isEmpty } from "../lib/validation";

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

export async function submitFormAction(data: {
  fullname: string | undefined;
  phonenumber: string | undefined;
  address: string | undefined;
  operator: string | undefined;
  delivery: string | undefined;
}) {
  if (
    isEmpty(data.fullname) ||
    isEmpty(data.phonenumber) ||
    isEmpty(data.address) ||
    isEmpty(data.operator) ||
    isEmpty(data.delivery)
  ) {
    return;
  }

  // submit form
}
