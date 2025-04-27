"use client";

import Product from "../models/product";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import Image from "next/image";
import { productImages } from "../images";
import SelectSize from "./SelectSize";

const Products: React.FC<{
  products: Product[];
  filter: string;
  search?: string;
  sort?: string;
}> = (props) => {
  let filteredProducts = props.products;

  // Filter by category
  if (props.filter != "all") {
    filteredProducts = filteredProducts.filter((product) =>
      product.categories.some((cat) => cat === props.filter)
    );
  }

  // Filter by search term
  if (props.search) {
    filteredProducts = filteredProducts.filter((product) =>
      product.title.toLowerCase().startsWith(props.search!.toLowerCase())
    );
  }

  // Sorting
  if (props.sort) {
    switch (props.sort) {
      case "a-z":
        filteredProducts = [...filteredProducts].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        break;
      case "z-a":
        filteredProducts = [...filteredProducts].sort((a, b) =>
          b.title.localeCompare(a.title)
        );
        break;
      case "price-asc":
        filteredProducts = [...filteredProducts].sort((a, b) => {
          return a.prices[0] - b.prices[0];
        });
        break;
      case "price-des":
        filteredProducts = [...filteredProducts].sort((a, b) => {
          return b.prices[0] - a.prices[0];
        });
        break;
    }
  }

  return (
    <>
      <ul className="grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
        {filteredProducts.map((product: Product, index) => (
          <li key={product._id} className="min-h-[475px]">
            <article className="relative h-full flex flex-col justify-between">
              <div>
                <Link href={`/products/${product._id}`}>
                  <img
                    className="mb-4 rounded-lg w-full"
                    src={product.images[0]}
                    alt={`Product ${product._id} Image`}
                  />
                  <h5>{product.title}</h5>
                </Link>
                {product.categories
                  .filter((cat) => cat === "bestseller" || cat === "new")
                  .map((cat) => (
                    <p
                      className="absolute top-2 right-2 bg-secondary rounded-full px-2 py-0.5 !text-white"
                      key={cat}
                    >
                      {cat}
                    </p>
                  ))}
                <p className="mb-4">{product.description}</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <data
                    className="font-bold text-3xl mr-2 text-neutral-700"
                    value={
                      product.discount
                        ? (
                            product.prices[0] *
                            (1 - product.discount / 100)
                          ).toFixed(2)
                        : product.prices[0]
                    }
                  >
                    $
                    {product.discount
                      ? (
                          product.prices[0] *
                          (1 - product.discount / 100)
                        ).toFixed(2)
                      : product.prices[0]}
                  </data>
                  {product.discount && (
                    <span className="line-through text-neutral-500">
                      ${product.prices[0]}
                    </span>
                  )}
                </div>
                <SelectSize
                  id={product._id}
                  sizes={product.sizes}
                  prices={product.prices}
                />
              </div>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
