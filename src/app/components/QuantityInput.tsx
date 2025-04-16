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
      <button className="btn btn-soft btn-primary" onClick={decrementQuantity}>
        -
      </button>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(+e.target.value)}
        className="input input-lg"
      />
      <button className="btn btn-soft btn-primary" onClick={incrementQuantity}>
        +
      </button>
    </>
  );
};
export default QuantityInput;
