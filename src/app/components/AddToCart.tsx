"use client";

import { useRef } from "react";
import QuantityInput from "./QuantityInput";
import { cartLocalModel } from "../models/cart";
import { redirect } from "next/navigation";

const AddToCart: React.FC<{ sizes: number[]; id: string }> = ({
  sizes,
  id,
}) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);

  function addToCart(size: number, quantity: number) {
    const oldCart: cartLocalModel[] = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart")!)
      : [];
    const productIndex = oldCart.findIndex(
      (cartItem) => cartItem.productId === id && cartItem.size === size
    );
    if (productIndex !== -1) {
      oldCart[productIndex].quantity += quantity;
      localStorage.setItem("cart", JSON.stringify(oldCart));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([
          ...oldCart,
          { id: oldCart.length + 1, productId: id, size, quantity: quantity },
        ])
      );
    }
    console.log("at4mny tyb");
  }
  return (
    <>
      <select
        name="size"
        id="size"
        ref={selectRef}
        className="mb-6 bg-neutral-200 w-full p-2 rounded"
      >
        {sizes.map((size) => (
          <option key={size} value={size}>
            {size}ML
          </option>
        ))}
      </select>

      <QuantityInput quantityInput={quantityRef} />

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <button
          onClick={() =>
            addToCart(
              Number(selectRef.current?.value),
              Number(quantityRef.current?.value)
            )
          }
          className="btn btn-outline btn-primary btn-lg w-full"
        >
          Add to bag
        </button>
        <button
          onClick={() => {
            addToCart(
              Number(selectRef.current?.value),
              Number(quantityRef.current?.value)
            );
            redirect("/cart");
          }}
          className="btn btn-primary btn-lg w-full"
        >
          Checkout
        </button>
      </div>
    </>
  );
};

export default AddToCart;
