import mongoose, { Schema, Document } from "mongoose";

export interface IOrderItem extends Document {
  productId: mongoose.Types.ObjectId;
  quantity: number;
  price: number;
  size: number;
}

export const orderItemSchema = new Schema<IOrderItem>({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: { type: Number, default: 1 },
  price: { type: Number, required: true },
  size: { type: Number, required: true },
});
