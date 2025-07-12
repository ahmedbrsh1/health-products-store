"use client";

import { ChangeEvent, useState } from "react";
import { combinedCartModel } from "../models/cart";
import { cartLocalModel } from "../models/cart";
import { Trash } from "lucide-react";

const CartItem: React.FC<{
  cartItem: combinedCartModel;
  deleteCartItem: (id: string) => void;
}> = ({ cartItem, deleteCartItem }) => {
  const [selectedSizeIndex, setSelectedSizeIndex] = useState<number>(
    cartItem.sizes.findIndex((size) => size === cartItem.size)
  );

  function updateAndDeleteHandler(
    e?: ChangeEvent<HTMLSelectElement>,
    action?: string
  ) {
    const cart: cartLocalModel[] = JSON.parse(localStorage.getItem("cart")!);

    const index = cart.findIndex(
      (localCartItem) => localCartItem.id === cartItem.id
    );

    if (action === "UPDATE") {
      setSelectedSizeIndex(
        cartItem.sizes.findIndex((s) => s === Number(e!.target.value))
      );
      cart[index].size =
        cartItem.sizes[
          cartItem.sizes.findIndex((s) => s === Number(e!.target.value))
        ];
    } else {
      cart.splice(index, 1);
      deleteCartItem(cartItem.id);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  return (
    <tr key={cartItem.id}>
      <td className="lg:flex items-center gap-4">
        <img className="w-16" src={cartItem.image} alt="ProductImage" />
        <div>
          <p>{cartItem.title}</p>
          <select
            className="border border-neutral-200 p-2 lg:w-32   rounded"
            name="sizes"
            id="sizes"
            value={cartItem.sizes[selectedSizeIndex]}
            onChange={(e) => updateAndDeleteHandler(e, "UPDATE")}
          >
            {cartItem.sizes.map((size) => (
              <option key={size} value={size}>
                {size}ML
              </option>
            ))}
          </select>
        </div>
      </td>
      <td>${cartItem.prices[selectedSizeIndex]}</td>
      <td>{cartItem.quantity}</td>
      <td>${cartItem.prices[selectedSizeIndex] * cartItem.quantity}</td>
      <td>
        <button onClick={() => updateAndDeleteHandler()}>
          <Trash />
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
