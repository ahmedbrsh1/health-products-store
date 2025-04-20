"use client";

import { useState } from "react";

const QuantityInput: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);

  function incrementQuantity() {
    setQuantity((prev) => prev + 1);
  }
  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  }
  return (
    <>
      <div>
        <label htmlFor="quantity" className="block">
          Quantity
        </label>
        <button
          className="btn btn-soft hover:btn-primary"
          onClick={decrementQuantity}
        >
          -
        </button>
        <input
          type="number"
          min={1}
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(+e.target.value)}
          className="max-w-10 bg-neutral-200 mx-4 p-2 rounded text-center appearance-none"
        />
        <button
          className="btn btn-soft hover:btn-primary"
          onClick={incrementQuantity}
        >
          +
        </button>
      </div>
    </>
  );
};
export default QuantityInput;
