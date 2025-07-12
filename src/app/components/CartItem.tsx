"use client";

import { combinedCartModel } from "../models/cart";

import { Trash } from "lucide-react";
import { useDispatch } from "react-redux";
import { cartReduxActions } from "../lib/store";

const CartItem: React.FC<{
  cartItem: combinedCartModel;
}> = ({ cartItem }) => {
  const dispatch = useDispatch();
  const selectedSizeIndex = cartItem.sizes.findIndex(
    (size) => size === cartItem.size
  );

  return (
    <tr key={cartItem.id}>
      <td className="lg:flex items-center gap-4">
        <img className="w-16" src={cartItem.image} alt="ProductImage" />
        <div>
          <p>{cartItem.title}</p>
          <select
            className="border border-neutral-200 p-2 lg:w-32 rounded"
            name="sizes"
            value={cartItem.size}
            onChange={(e) =>
              dispatch(
                cartReduxActions.updateSize({
                  id: cartItem.id,
                  size: Number(e.target.value),
                })
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
      <td>
        <button
          type="button"
          onClick={() =>
            dispatch(cartReduxActions.deleteCartItem({ id: cartItem.id }))
          }
        >
          <Trash />
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
