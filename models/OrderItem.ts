import mongoose, { Schema, Document } from "mongoose";

export interface IOrderItem extends Document {
  productId: mongoose.Types.ObjectId;
  quantity: number;
  size: number;
  totalItemPrice: number;
}

export const orderItemSchema = new Schema<IOrderItem>({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: { type: Number, default: 1 },
  size: { type: Number, required: true },
  totalItemPrice: { type: Number, required: true },
});
