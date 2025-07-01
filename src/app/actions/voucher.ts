"use server";

import { checkVoucherValid } from "../../../lib/db/vouchers";

export type VoucherResponse =
  | {
      success: true;
      message: string;
      amount: number;
      code: string;
    }
  | {
      success: false;
      message: string;
    };

export async function checkVoucher(code: string): Promise<VoucherResponse> {
  const result = await checkVoucherValid(code);

  if (!result) {
    return { success: false, message: "Invalid or expired voucher." };
  }

  return {
    success: true,
    message: `$${result.amount} off!`,
    amount: result.amount,
    code: result.code,
  };
}
