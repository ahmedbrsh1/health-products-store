import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  fname: string;
  lname: string;
  email: string;
  password: string;
}

const userSchema: Schema = new Schema<IUser>(
  {
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.User ||
  mongoose.model<IUser>("User", userSchema);
