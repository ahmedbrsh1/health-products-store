"use client";

import { useState } from "react";
import Products from "./Products";
import Product from "../models/product";

import Product1 from "../../../public/Product1.jpg";
import Product2 from "../../../public/Product2.jpg";
import Product3 from "../../../public/Product3.jpg";
import Product4 from "../../../public/Product4.jpg";

const productImages = [Product1, Product2, Product3, Product4];

const products: Product[] = [
  {
    id: 1,
    title: "Oil",
    description: "abc",
    category: "bestseller",
    image: Product1,
    price: 12,
  },
  {
    id: 2,
    title: "Shampoo",
    description: "cbd",
    category: "bestseller",
    image: Product2,
    price: 15,
    discountedPrice: 12,
  },
  {
    id: 3,
    title: "Conditioner",
    description: "cbd",
    category: "bestseller",
    image: Product3,
    price: 15,
    discountedPrice: 12,
  },
  {
    id: 4,
    title: "Body wash",
    description: "cbd",
    category: "bestseller",
    image: Product4,
    price: 15,
    discountedPrice: 12,
  },
];
const HomeProducts: React.FC = () => {
  const [filter, setFilter] = useState<string>("bestseller");

  function updateFilter(filter: string) {
    setFilter(filter);
  }
  return (
    <>
      <div className="text-center mb-12">
        <button
          onClick={() => updateFilter("bestseller")}
          className={`btn btn-soft w-[150px]  ${
            filter === "bestseller" ? "btn-primary" : ""
          }`}
        >
          Best-sellers
        </button>
        <button
          onClick={() => updateFilter("new")}
          className={`btn btn-primary w-[150px]  ${
            filter === "new" ? "btn-active" : ""
          }`}
        >
          New products
        </button>
      </div>
      <Products filter={filter} products={products} />
    </>
  );
};

export default HomeProducts;
