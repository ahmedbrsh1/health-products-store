import connect from "../db/connect";
import Product, { IProduct } from "../../models/Product";

export async function getAllProducts() {
  try {
    await connect();
    const products = await Product.find();
    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    throw new Error("Failed to fetch products: " + (error as Error).message);
  }
}

export async function getProductById(id: string) {
  await connect();
  return await Product.findById(id);
}

export async function getFeaturedProducts() {
  try {
    await connect();
    const featuredProducts = await Product.find({
      categories: { $in: ["new", "bestseller"] },
    });
    return JSON.parse(JSON.stringify(featuredProducts));
  } catch (error) {
    console.error("Error fetching featured products:", error);
    throw new Error("Failed to fetch featured products");
  }
}

export async function getProductsByIds(ids: string[]) {
  const products = await Product.find({ _id: { $in: ids } }).lean<IProduct[]>();

  return products.map((product: IProduct) => ({
    productId: product._id.toString(),
    title: product.title,
    image: product.images?.[0] || "",
    prices: product.prices,
    sizes: product.sizes,
  }));
}
