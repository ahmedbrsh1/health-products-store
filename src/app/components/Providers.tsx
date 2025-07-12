"use client";
import { ReactNode, useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { cartReduxActions, store } from "../lib/store";
import { cartLocalModel } from "../models/cart";

const CartInitializer = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: cartLocalModel[]) => state);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      dispatch(cartReduxActions.setCart(JSON.parse(stored)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return null;
};

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <CartInitializer />
      {children}
    </Provider>
  );
};

export default Providers;
