"use client";
import { ShoppingCart } from "lucide-react";

import { useState } from "react";
import { cartLocalModel } from "../models/cart";
const SelectSize: React.FC<{
  id: string;
  sizes: number[];
  prices: number[];
}> = (props) => {
  const [modalIsOpen, setModalisOpen] = useState(false);

  function triggerModal() {
    setModalisOpen((prev) => !prev);
  }

  function addToCart(size: number) {
    const oldCart: cartLocalModel[] = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart")!)
      : [];
    const productIndex = oldCart.findIndex(
      (cartItem) => cartItem.productId === props.id && cartItem.size === size
    );
    if (productIndex !== -1) {
      oldCart[productIndex].quantity += 1;
      localStorage.setItem("cart", JSON.stringify(oldCart));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([
          ...oldCart,
          { id: oldCart.length + 1, productId: props.id, size, quantity: 1 },
        ])
      );
    }
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
              onClick={() => addToCart(size)}
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
