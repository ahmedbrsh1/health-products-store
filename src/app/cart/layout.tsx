import { ReactNode } from "react";

export default function CartLayout({
  children,
  paymentmethod,
}: {
  children: ReactNode;
  paymentmethod: ReactNode;
}) {
  return (
    <>
      {paymentmethod}
      {children}
    </>
  );
}
