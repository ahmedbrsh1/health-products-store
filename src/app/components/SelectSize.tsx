"use client";
import { ShoppingCart } from "lucide-react";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartReduxActions } from "../lib/store";

const SelectSize: React.FC<{
  id: string;
  sizes: number[];
  prices: number[];
}> = (props) => {
  const [modalIsOpen, setModalisOpen] = useState(false);
  const dispatch = useDispatch();
  function triggerModal() {
    setModalisOpen((prev) => !prev);
  }

  return (
    <div className="relative">
      <ShoppingCart
        onClick={triggerModal}
        className="btn btn-outline btn-primary w-12 h-12 rounded-full"
      />
      {modalIsOpen && (
        <div className="absolute bottom-full right-0 mb-1 bg-white border border-neutral-200 p-4 flex gap-2 rounded">
          {props.sizes.map((size, index) => (
            <button
              key={size}
              onClick={() =>
                dispatch(cartReduxActions.AddToCart({ id: props.id, size }))
              }
              className="btn btn-primary flex flex-col h-12"
            >
              <span>{size}ML</span>
              <span>${props.prices[index]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectSize;
