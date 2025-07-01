// lib/checkVoucher.ts
import connect from "./connect";
import { Voucher } from "../../models/Voucher";

export async function checkVoucherValid(
  code: string
): Promise<null | { amount: number; code: string }> {
  await connect();

  const voucher = await Voucher.findOne({ code });

  if (!voucher) return null;

  const now = new Date();
  const isValid = voucher.remainingUses > 0 && voucher.expiresAt > now;

  if (!isValid) return null;

  return {
    code: voucher.code,
    amount: voucher.amount, // assuming you have `amount` in your Voucher model
  };
}
