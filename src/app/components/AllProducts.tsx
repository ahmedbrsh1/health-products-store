"use client";
import Products from "@/app/components/Products";
import Product1 from "../../../public/Product1.jpg";
import Product2 from "../../../public/Product2.jpg";
import Product3 from "../../../public/Product3.jpg";
import Product4 from "../../../public/Product4.jpg";
import Product5 from "../../../public/Product5.jpg";
import Product6 from "../../../public/Product6.jpg";
import Product7 from "../../../public/Product7.jpg";
import Product8 from "../../../public/Product8.jpg";
import Product9 from "../../../public/Product9.jpg";
import Product10 from "../../../public/Product10.jpg";
import Product11 from "../../../public/Product11.jpg";
import Product12 from "../../../public/Product12.jpg";
import Product from "@/app/models/product";
import { useState } from "react";

const products: Product[] = [
  {
    id: 1,
    title: "c",
    description: "abc",
    category: "face",
    image: Product1,
    price: 12,
  },
  {
    id: 2,
    title: "b",
    description: "cbd",
    category: "body",
    image: Product2,
    price: 13,
    discountedPrice: 12,
  },
  {
    id: 3,
    title: "a",
    description: "cbd",
    category: "face-bestseller",
    image: Product3,
    price: 14,
  },
  {
    id: 4,
    title: "Body wash",
    description: "cbd",
    category: "body-bestseller",
    image: Product4,
    price: 15,
    discountedPrice: 12,
  },
  {
    id: 5,
    title: "Body wash",
    description: "cbd",
    category: "face",
    image: Product5,
    price: 16,
  },
  {
    id: 6,
    title: "Body wash",
    description: "cbd",
    category: "body",
    image: Product6,
    price: 17,
    discountedPrice: 14,
  },
  {
    id: 7,
    title: "Body wash",
    description: "cbd",
    category: "face",
    image: Product7,
    price: 18,
    discountedPrice: 15,
  },
  {
    id: 8,
    title: "Body wash",
    description: "cbd",
    category: "body",
    image: Product8,
    price: 19,
    discountedPrice: 14,
  },
  {
    id: 9,
    title: "Body wash",
    description: "cbd",
    category: "face-bestseller",
    image: Product9,
    price: 15,
  },
  {
    id: 10,
    title: "Body wash",
    description: "cbd",
    category: "new-face-bestseller",
    image: Product10,
    price: 20,
  },
  {
    id: 11,
    title: "Body wash",
    description: "cbd",
    category: "new-body-bestseller",
    image: Product11,
    price: 25,
    discountedPrice: 12,
  },
  {
    id: 12,
    title: "Body wash",
    description: "cbd",
    category: "new-body-bestseller",
    image: Product12,
    price: 30,
    discountedPrice: 12,
  },
];

const AllProducts: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState<string>();
  const [sort, setSort] = useState<string>();
  const [page, setPage] = useState<number>(1);

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
      <div className="flex justify-between mb-16 items-center">
        <div className="flex gap-2">
          <button onClick={() => setFilter("all")} className="btn btn-primary">
            All Products
          </button>
          <button onClick={() => setFilter("face")} className="btn btn-primary">
            Face
          </button>
          <button onClick={() => setFilter("body")} className="btn btn-primary">
            Body
          </button>
        </div>
        <div>
          <input
            className="border-b border-neutral-200 mr-4 focus:outline-0 py-4 text-neutral-500 placeholder:text-neutral-200 text-lg"
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
        products={products}
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
