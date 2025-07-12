import { configureStore, createSlice } from "@reduxjs/toolkit";
import { cartLocalModel } from "@/app/models/cart";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: cartLocalModel[] = [];

const cartSlice = createSlice({
  name: "cart",
  reducers: {
    setCart(_, action: PayloadAction<cartLocalModel[]>) {
      return action.payload;
    },
    AddToCart(
      state,
      action: PayloadAction<{ id: string; size: number; quantity?: number }>
    ) {
      const productIndex = state.findIndex(
        (cartItem) =>
          cartItem.productId === action.payload.id &&
          cartItem.size === action.payload.size
      );
      if (productIndex !== -1) {
        state[productIndex].quantity += action.payload.quantity || 1;
      } else {
        state.push({
          id: state.length + 1,
          productId: action.payload.id,
          size: action.payload.size,
          quantity: action.payload.quantity || 1,
        });
      }
    },
    deleteCartItem(state, action: PayloadAction<{ id: number }>) {
      return state.filter((cartItem) => cartItem.id !== action.payload.id);
    },
    updateQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) {
      const index = state.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      state[index].quantity = action.payload.quantity;
    },
    updateSize(state, action: PayloadAction<{ id: number; size: number }>) {
      const index = state.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      state[index].size = action.payload.size;
    },
  },
  initialState,
});

export const store = configureStore({ reducer: cartSlice.reducer });

export const cartReduxActions = cartSlice.actions;
