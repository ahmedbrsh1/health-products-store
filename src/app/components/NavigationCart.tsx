"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";

import { useSelector } from "react-redux";
import { cartLocalModel } from "../models/cart";
const NavigationCart: React.FC = () => {
  const cartLength = useSelector((state: cartLocalModel[]) => state.length);

  return (
    <Link href="/cart" className="flex gap-2">
      <ShoppingCart />
      Cart({cartLength})
    </Link>
  );
};

export default NavigationCart;
