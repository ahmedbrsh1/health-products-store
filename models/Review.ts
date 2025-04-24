import mongoose, { Schema, Document } from "mongoose";

export interface IReview extends Document {
  userId: mongoose.Types.ObjectId; // Instead of username, use userId
  date: Date;
  review: string;
  rate: number;
}

export const reviewSchema = new Schema<IReview>({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Now referencing User model
  date: { type: Date, default: Date.now },
  review: { type: String, required: true },
  rate: { type: Number, required: true, min: 1, max: 5 },
});

export default mongoose.models.Review ||
  mongoose.model<IReview>("Review", reviewSchema);
