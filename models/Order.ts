import mongoose, { Schema, Document } from "mongoose";
import { orderItemSchema, IOrderItem } from "./OrderItem";

export interface IOrder extends Document {
  userId: mongoose.Types.ObjectId;
  products: IOrderItem[];
  totalPrice: number;
}

const orderSchema: Schema = new Schema<IOrder>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [orderItemSchema],
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Order ||
  mongoose.model<IOrder>("Order", orderSchema);
