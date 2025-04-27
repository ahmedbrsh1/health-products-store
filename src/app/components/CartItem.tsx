"use client";

import { useState } from "react";
import { combinedCartModel } from "../models/cart";
const CartItem: React.FC<{ cartItem: combinedCartModel }> = ({ cartItem }) => {
  const [selectedSizeIndex, setSelectedSizeIndex] = useState<number>(
    cartItem.sizes.findIndex((size) => size === cartItem.size)
  );

  return (
    <tr key={cartItem.id}>
      <td className="flex items-center gap-4">
        <img className="w-16" src={cartItem.image} alt="ProductImage" />
        <div>
          <p>{cartItem.title}</p>
          <select
            className="border border-neutral-200 p-2 w-32 rounded"
            name="sizes"
            id="sizes"
            value={cartItem.size}
            onChange={(e) =>
              setSelectedSizeIndex(
                cartItem.sizes.findIndex((s) => s === Number(e.target.value))
              )
            }
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
      <td>Delete</td>
    </tr>
  );
};

export default CartItem;
