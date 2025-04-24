import mongoose, { Schema, Document } from "mongoose";
import { IReview, reviewSchema } from "./Review";

export interface IProduct extends Document {
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
  faqs: { question: string; answer: string }[]; // FAQ now contains both question and answer as objects
  categories: string[];
  images: string[]; // Can be URLs or local paths, as per your setup
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
