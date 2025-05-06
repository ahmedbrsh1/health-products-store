"use client";
import { useEffect, useState } from "react";
import { cartLocalModel, combinedCartModel } from "../models/cart";
import { cartServerModel } from "../models/cart";
import CartItem from "./CartItem";
import getProductsFromIds from "../actions/cart";

const CartItems: React.FC = () => {
  const [cart, setCart] = useState<combinedCartModel[]>([]);

  function deleteCartItem(id: string) {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
  }

  useEffect(() => {
    async function fetchProducts() {
      const cartItems: cartLocalModel[] = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart")!)
        : [];
      if (cartItems.length === 0) {
        return;
      }
      const ids = [...new Set(cartItems.map((item) => item.productId))];

      const serverCart = await getProductsFromIds(ids);

      const combinedCartsData: combinedCartModel[] = cartItems.map(
        (localCartItem: cartLocalModel) => {
          const index = serverCart.findIndex(
            (serverCartItem: cartServerModel) =>
              localCartItem.productId === serverCartItem.productId
          );

          return {
            ...localCartItem,
            ...serverCart[index],
          };
        }
      );

      setCart(combinedCartsData);
    }
    fetchProducts();
  }, []);

  return cart.map((cartItem) => (
    <CartItem
      deleteCartItem={deleteCartItem}
      key={cartItem.id}
      cartItem={cartItem}
    />
  ));
};

export default CartItems;
