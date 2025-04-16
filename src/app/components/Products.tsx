"use client";

import Image from "next/image";
import Product from "../models/product";

const Products: React.FC<{
  products: Product[];
  filter: string;
  search?: string;
  sort?: string;
}> = (props) => {
  let filteredProducts = props.products;

  if (props.filter !== "all") {
    filteredProducts = filteredProducts.filter((product) =>
      product.category.split("-").some((term) => term === props.filter)
    );
  }

  if (props.search) {
    filteredProducts = filteredProducts.filter((product) =>
      product.title.toLowerCase().startsWith(props.search!.toLowerCase())
    );
  }

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
          if (a.discountedPrice) {
            if (b.discountedPrice) {
              return a.discountedPrice - b.discountedPrice;
            } else {
              return a.discountedPrice - b.price;
            }
          } else {
            return a.price - b.price;
          }
        });
        break;
      case "price-des":
        filteredProducts = [...filteredProducts].sort((a, b) => {
          if (a.discountedPrice) {
            if (b.discountedPrice) {
              return b.discountedPrice - a.discountedPrice;
            } else {
              return b.price - a.discountedPrice;
            }
          } else {
            return b.price - a.price;
          }
        });
        break;
    }
    filteredProducts = filteredProducts.sort();
  }

  return (
    <>
      <ul className="grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-16">
        {filteredProducts.map((product: Product) => (
          <li key={product.id}>
            <article>
              <Image
                className="mb-4 rounded-lg"
                src={product.image}
                alt={`Product ${product.id} Image`}
              />
              <h5>{product.title}</h5>
              <p className="mb-4">{product.description}</p>
              <data
                className="font-bold text-3xl mr-2 text-neutral-700"
                value={
                  product.discountedPrice
                    ? product.discountedPrice
                    : product.price
                }
              >
                $
                {product.discountedPrice
                  ? product.discountedPrice
                  : product.price}
              </data>
              {product.discountedPrice && (
                <span className="line-through text-neutral-500">
                  ${product.price}
                </span>
              )}
            </article>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
