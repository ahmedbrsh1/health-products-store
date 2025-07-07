"use client";
import Products from "@/app/components/Products";
import { useState } from "react";
import Product from "../models/product";

const AllProducts: React.FC<{ products: Product[] }> = (props) => {
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState<string>();
  const [sort, setSort] = useState<string>();
  const [, setPage] = useState<number>(1);

  function incrementPage() {
    setPage((prev) => prev + 1);
  }

  function decrementPage() {
    setPage((prev) => prev + 1);
  }

  function updatePage(page: number) {
    setPage(page);
  }

  return (
    <>
      <div className="flex justify-center gap-4 mb-16 items-center flex-wrap md:justify-between">
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => setFilter("all")}
            className={`btn btn-primary btn-ghost w-48 h-12 text-lg text-primary  hover:text-neutral-200 ${
              filter === "all" ? "btn-active !text-neutral-200" : ""
            }`}
          >
            All Products
          </button>
          <button
            onClick={() => setFilter("face")}
            className={`btn btn-primary btn-ghost w-48 h-12 text-lg text-primary  hover:text-neutral-200 ${
              filter === "face" ? "btn-active !text-neutral-200" : ""
            }`}
          >
            Face
          </button>
          <button
            onClick={() => setFilter("body")}
            className={`btn btn-primary btn-ghost w-48 h-12 text-lg text-primary focus:text-neutral-200 hover:text-neutral-200  ${
              filter === "body" ? "btn-active !text-neutral-200" : ""
            }`}
          >
            Body
          </button>
        </div>
        <div className="flex justify-center flex-wrap gap-4">
          <input
            className="border-b border-neutral-200 focus:outline-0 py-4 text-neutral-500 placeholder:text-neutral-200 text-lg"
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search product..."
          />
          <select
            onChange={(e) => setSort(e.target.value)}
            name="sort"
            id="sort"
            className="bg-neutral-200 p-4 rounded-lg text-neutral-600"
            defaultValue={"default"}
          >
            <option disabled value="default">
              Sort by
            </option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
            <option value="price-asc">Price - Ascending</option>
            <option value="price-des">Price - Descending</option>
          </select>
        </div>
      </div>

      <Products
        products={props.products}
        filter={filter}
        search={search}
        sort={sort}
      />

      <nav className="mt-24 justify-center flex gap-4">
        <button
          className="btn btn-circle btn-primary btn-ghost"
          onClick={incrementPage}
        >
          &lt;
        </button>
        <button onClick={() => updatePage(1)}>1</button>
        <button onClick={() => updatePage(2)}>2</button>
        <button onClick={() => updatePage(3)}>3</button>
        <button onClick={() => updatePage(4)}>4</button>
        <button onClick={decrementPage}>&gt;</button>
      </nav>
    </>
  );
};

export default AllProducts;
