"use client";

import { useRef } from "react";
import QuantityInput from "./QuantityInput";

import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";
import { cartReduxActions } from "../lib/store";
const AddToCart: React.FC<{ sizes: number[]; id: string }> = ({
  sizes,
  id,
}) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

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
            dispatch(
              cartReduxActions.AddToCart({
                id,
                size: Number(selectRef.current?.value) || sizes[0],
                quantity: Number(quantityRef.current?.value) || 1,
              })
            )
          }
          className="btn btn-outline btn-primary btn-lg w-full"
        >
          Add to bag
        </button>
        <button
          onClick={() => {
            dispatch(
              cartReduxActions.AddToCart({
                id,
                size: Number(selectRef.current?.value) || sizes[0],
                quantity: Number(quantityRef.current?.value) || 1,
              })
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
