"use client";
import { useEffect, useState } from "react";
import { cartLocalModel, combinedCartModel } from "../models/cart";
import { cartServerModel } from "../models/cart";
import CartItem from "./CartItem";

const CartItems: React.FC = () => {
  const [cart, setCart] = useState<combinedCartModel[]>([]);

  useEffect(() => {
    const cartItems: cartLocalModel[] = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart")!)
      : [];
    const ids = cartItems.map((cartItem) => cartItem.id);

    async function fetchProducts() {
      const response = await fetch(`/api/get-cart-products`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(ids),
      });

      if (!response.ok) {
      }

      const serverCart = await response.json();

      const combinedCartsData: combinedCartModel[] = serverCart.map(
        (cartItem: cartServerModel, index: number) => {
          return {
            ...cartItem,
            id: cartItems[index].id,
            quantity: cartItems[index].quantity,
            size: cartItems[index].size,
          };
        }
      );

      setCart(combinedCartsData);
    }

    if (cartItems.length > 0) {
      fetchProducts();
    }
  }, []);
  return cart.map((cartItem) => (
    <CartItem key={cartItem.id} cartItem={cartItem} />
  ));
};

export default CartItems;
