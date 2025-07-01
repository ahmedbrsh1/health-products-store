import mongoose, { Schema, Document } from "mongoose";

export interface IVoucher extends Document {
  code: string;
  remainingUses: number;
  expiresAt: Date;
  amount: number;
}

const voucherSchema = new Schema<IVoucher>({
  code: { type: String, required: true, unique: true },
  remainingUses: { type: Number, required: true },
  expiresAt: { type: Date, required: true },
  amount: { type: Number, required: true },
});

export const Voucher =
  mongoose.models.Voucher || mongoose.model<IVoucher>("Voucher", voucherSchema);
