import mongoose, { Schema, Document } from "mongoose";
import { orderItemSchema } from "./OrderItem";
import { IOrderItem } from "./OrderItem";
export interface IOrder extends Document {
  userId: mongoose.Types.ObjectId;
  orderNumber: string;
  products: IOrderItem[];
  operator: string;
  delivery: string;
  totalPrice: number;
  createdAt: Date;
}

const orderSchema = new Schema<IOrder>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [orderItemSchema],
    operator: { type: String, required: true },
    delivery: { type: String, required: true },
    orderNumber: { type: String, required: true, unique: true },
    totalPrice: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// ✅ THIS is critical:
export default mongoose.models.Order ||
  mongoose.model<IOrder>("Order", orderSchema);
