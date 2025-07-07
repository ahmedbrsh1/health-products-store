"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const NavigationCart: React.FC = () => {
  const [cartLength, setCartLength] = useState<number>(0);
  useEffect(() => {
    const numberOfItems = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart")!).length
      : [].length;
    setCartLength(numberOfItems);
  }, []);

  return (
    <Link href="/cart" className="flex gap-2">
      <ShoppingCart />
      Cart({cartLength})
    </Link>
  );
};

export default NavigationCart;
