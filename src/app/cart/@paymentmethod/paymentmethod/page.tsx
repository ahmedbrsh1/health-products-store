"use client";
import TextInput from "@/app/components/TextInput";
import { useRouter } from "next/navigation";

export default function AddPaymentMethod() {
  const router = useRouter();

  return (
    <>
      <div
        onClick={() => router.back()}
        className="w-full h-screen top-0 fixed bg-black/50 z-10"
      ></div>
      <form
        className="w-full md:max-w-96 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded shadow z-20"
        action=""
      >
        <h2>Add a payment method</h2>
        <div className="flex flex-col gap-4">
          <TextInput label="Card number" name="cardnumber" />
          <TextInput label="CVV" name="cvv" />
          <TextInput label="Expiration date" name="date" />
        </div>
        <div className="justify-end flex mt-4">
          <button className="btn btn-primary w-32">Add</button>
        </div>
      </form>
    </>
  );
}
