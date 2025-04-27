"use client";

import { useState } from "react";
import Products from "./Products";
import Product from "../models/product";

const HomeProducts: React.FC<{ products: Product[] }> = (props) => {
  const [filter, setFilter] = useState<string>("bestseller");

  function updateFilter(filter: string) {
    setFilter(filter);
  }
  return (
    <>
      <div className="text-center mb-12">
        <button
          onClick={() => updateFilter("bestseller")}
          className={`btn btn-soft btn-primary w-[150px]  ${
            filter === "bestseller" ? "btn-active" : ""
          }`}
        >
          Best-sellers
        </button>
        <button
          onClick={() => updateFilter("new")}
          className={`btn btn-soft btn-primary w-[150px]  ${
            filter === "new" ? "btn-active" : ""
          }`}
        >
          New products
        </button>
      </div>
      <Products filter={filter} products={props.products} />
    </>
  );
};

export default HomeProducts;
