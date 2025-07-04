import mongoose, { Schema, Document, Types } from "mongoose";
import { IReview, reviewSchema } from "./Review";

export interface IProduct extends Document {
  _id: Types.ObjectId;
  title: string;
  description: string;
  prices: number[];
  discount?: number;
  related: mongoose.Types.ObjectId[];
  reviews: IReview[];
  sold: number;
  sizes: number[];
  rate: number;
  benefits: string[];
  ingredients: string[];
  faqs: { question: string; answer: string }[];
  categories: string[];
  images: string[];
}

const productSchema: Schema = new Schema<IProduct>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    prices: [{ type: Number, required: true }],
    discount: { type: Number },
    related: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    reviews: [reviewSchema],
    sold: { type: Number, default: 0 },
    sizes: [{ type: Number }],
    rate: { type: Number, required: true, min: 1, max: 5 },
    benefits: [{ type: String }],
    ingredients: [{ type: String }],
    faqs: [
      {
        question: { type: String, required: true },
        answer: { type: String, required: true },
      },
    ],
    categories: [{ type: String }],
    images: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model<IProduct>("Product", productSchema);
