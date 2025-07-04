"use client";

import {
  CheckCircle,
  CreditCard,
  ReceiptText,
  ShoppingCart,
  Truck,
  UserCircle,
} from "lucide-react";
import Link from "next/link";

import {
  FormEvent,
  startTransition,
  useActionState,
  useEffect,
  useState,
} from "react";
import { isEmpty } from "../lib/validation";
import { getProductsFromIds, submitFormAction } from "../actions/cart";
import ValidationError from "./ValidationError";
import { combinedCartModel } from "../models/cart";
import { cartServerModel } from "../models/cart";
import { cartLocalModel } from "../models/cart";
import CartItem from "./CartItem";
import { VoucherResponse } from "../actions/voucher";
import TextInput from "./TextInput";
import { checkVoucher } from "../actions/voucher";
type errors = {
  form?: { fullname?: string; phonenumber?: string; address?: string };
  operator?: boolean;
  deliveryOption?: boolean;
  payment?: boolean;
};

const Cart: React.FC = () => {
  const [cart, setCart] = useState<combinedCartModel[]>([]);
  const [errors, setErrors] = useState<errors>({});
  const [, submitOrderAction] = useActionState(submitFormAction, {
    success: false,
    message: null,
  });

  let total = 0;

  if (cart.length > 0) {
    cart.map(
      (cartItem) =>
        (total +=
          cartItem.prices[
            cartItem.sizes.findIndex((size) => cartItem.size === size)
          ] * cartItem.quantity)
    );
  }

  useEffect(() => {
    const localCart: cartLocalModel[] = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart")!)
      : [];
    async function fetchProductsFromServer() {
      const ids = [...new Set(localCart.map((item) => item.productId))];

      const serverCart = await getProductsFromIds(ids);

      const combinedCartsData: combinedCartModel[] = localCart.map(
        (localCartItem: cartLocalModel) => {
          const index = serverCart.findIndex(
            (serverCartItem: cartServerModel) =>
              localCartItem.productId === serverCartItem.productId
          );

          return {
            ...localCartItem,
            ...serverCart[index],
          };
        }
      );

      setCart(combinedCartsData);
    }
    if (localCart.length === 0) {
      return;
    }
    fetchProductsFromServer();
  }, []);

  function deleteCartItem(id: string) {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
  }

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const formData = new FormData(e.currentTarget);
    const data = {
      fullname: formData.get("fullname")?.toString(),
      phonenumber: formData.get("phonenumber")?.toString(),
      address: formData.get("address")?.toString(),
      operator: formData.get("operator")?.toString(),
      delivery: formData.get("delivery")?.toString(),
      payment: formData.get("payment")?.toString(),
      products: cart.map(({ productId, quantity, size }) => ({
        productId,
        size,
        quantity,
      })),
    };
    const errors: errors = {};
    if (isEmpty(data.fullname)) {
      errors.form ??= {};
      errors.form.fullname = "Full Name is required!";
    }
    if (isEmpty(data.phonenumber)) {
      errors.form ??= {};
      errors.form.phonenumber = "Phonenumber is required!";
    }
    if (isEmpty(data.address)) {
      errors.form ??= {};
      errors.form.address = "Address is required!";
    }
    if (!data.operator) {
      errors.operator = true;
    }
    if (!data.delivery) {
      errors.deliveryOption = true;
    }
    if (!data.payment) {
      errors.payment = true;
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    startTransition(() => {
      const result = submitOrderAction(data);
      console.log(result);
    });
  }

  return (
    <>
      <h2 className="text-center mb-16">
        My Shopping Bag({cart.length} Items)
      </h2>
      <form
        onSubmit={submitHandler}
        className="grid md:grid-cols-[1fr_auto] gap-4 mb-16"
      >
        <div>
          <section className="p-4 border border-neutral-200 rounded mb-4">
            <h5 className="flex gap-2">
              <ShoppingCart /> Order Summary
            </h5>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((cartItem) => (
                  <CartItem
                    deleteCartItem={deleteCartItem}
                    key={cartItem.id}
                    cartItem={cartItem}
                  />
                ))}
              </tbody>
            </table>
          </section>

          <section className="p-4 border border-neutral-200 rounded mb-4">
            <h5
              className={`flex gap-2 mb-4 ${
                errors.operator || errors.deliveryOption ? "!text-warning" : ""
              }`}
            >
              <Truck /> Delivery options
            </h5>
            <div>
              <label className="mb-2 block">Operator</label>
              <div className="mb-8">
                <input
                  type="radio"
                  name="operator"
                  id="ups"
                  value="ups"
                  className="radio radio-sm radio-primary mr-2"
                />
                <label htmlFor="ups" className="mr-6">
                  UPS
                </label>
                <input
                  type="radio"
                  name="operator"
                  id="fedex"
                  value="fedex"
                  className="radio radio-sm radio-primary mr-2"
                />
                <label htmlFor="fedex" className="mr-6">
                  FedEx
                </label>
                <input
                  type="radio"
                  name="operator"
                  id="dhl"
                  value="dhl"
                  className="radio radio-sm radio-primary mr-2"
                />
                <label htmlFor="dhl" className="mr-6">
                  DHL
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <DeliveryOption
                id="instant"
                title="Instant"
                price={22}
                arrival="Today"
              />
              <DeliveryOption
                id="standard"
                title="Standard"
                price={12}
                arrival="Unknown"
              />
            </div>
          </section>
          <section className="p-4 border border-neutral-200 rounded">
            <h5 className="flex gap-2 mb-8">
              <UserCircle /> Customer Information
            </h5>
            <div className="grid md:grid-cols-2 gap-x-4 gap-y-6 mb-4">
              <TextInput name="fullname" label="Full name" />
              <TextInput name="phonenumber" label="Phone number" />
              <TextInput
                className="md:col-span-2"
                name="address"
                label="Address"
              />
            </div>
            {errors.form && (
              <ValidationError>
                <ul>
                  {Object.entries(errors.form).map(([key, value]) => (
                    <li key={key}>{value}</li>
                  ))}
                </ul>
              </ValidationError>
            )}
            <input
              type="checkbox"
              id="default"
              className="checkbox checkbox-primary mr-2"
            />
            <label htmlFor="default">Save as default</label>
          </section>
        </div>
        <CartSummary errors={errors} total={total} />
      </form>
    </>
  );
};

export default Cart;

const DeliveryOption: React.FC<{
  id: string;
  price: number;
  title: string;
  arrival: string;
}> = (props) => {
  return (
    <div>
      <input
        className="peer hidden"
        type="radio"
        name="delivery"
        value={props.id}
        id={props.id}
      />
      <label
        htmlFor={props.id}
        className="flex gap-4 border border-neutral-400 p-4 rounded peer-checked:text-primary peer-checked:border-primary peer-checked:bg-[#F2F2FDFF]"
      >
        <CheckCircle />
        <div>
          <h5 style={{ color: "inherit" }}>${props.price}</h5>
          <p style={{ color: "inherit" }}>{props.title} delivery</p>
          <p style={{ color: "inherit" }}>Est.arrival: {props.arrival}</p>
        </div>
      </label>
    </div>
  );
};

const PaymentMethod: React.FC<{
  id: string;
  type: string;
  last4: string;
}> = (props) => {
  return (
    <div>
      <input
        className="peer hidden"
        type="radio"
        name="payment"
        value={props.id}
        id={props.id}
      />
      <label
        htmlFor={props.id}
        className="flex justify-between  border border-neutral-400 p-4 rounded peer-checked:text-primary peer-checked:border-primary peer-checked:bg-[#F2F2FDFF] mb-4"
      >
        <div className="flex">
          <CreditCard className="mr-2" />
          <p style={{ color: "inherit" }}>{props.type}</p>
        </div>

        <p style={{ color: "inherit" }}>{props.last4}</p>
      </label>
    </div>
  );
};

import { useRef } from "react";

const CartSummary: React.FC<{ errors: errors; total: number }> = ({
  errors,
  total,
}) => {
  const [resultState, setResultState] = useState<VoucherResponse | null>(null);

  const voucher = useRef<HTMLInputElement>(null);

  async function submitVoucher() {
    const result = await checkVoucher(voucher.current!.value);
    setResultState(result);
  }

  return (
    <div className="border border-primary rounded-2xl h-fit p-8">
      <h5 className="mb-4">Payment Method</h5>
      <Link className="text-sm text-info mb-2 block" href="/cart/paymentmethod">
        Change payment methods
      </Link>
      <ul>
        <li>
          <PaymentMethod id="1" type="Mastercard" last4="5987" />
          <PaymentMethod id="2" type="Mastercard" last4="5987" />
        </li>
      </ul>
      {errors.payment && (
        <ValidationError>Please select a payment method</ValidationError>
      )}
      <label className="mt-8 mb-2 block" htmlFor="voucher">
        Voucher
      </label>

      <div className="flex gap-2 mb-2">
        <input
          ref={voucher}
          className="border border-neutral-200 rounded-lg pl-2"
          type="text"
          id="voucher"
          name="voucher"
        />
        <button
          type="button"
          onClick={submitVoucher}
          className="btn btn-primary btn-soft"
        >
          Apply
        </button>
      </div>
      {resultState && (
        <span className="bg-secondary rounded-full px-2 py-1 text-white ">
          {resultState.message}
        </span>
      )}

      <section className="mt-8">
        <h5 className="flex gap-2 mb-4">
          <ReceiptText className="text-[#EA916EFF]" />
          Summary
        </h5>
        <dl>
          <div className="flex justify-between">
            <dt>Subtotal</dt>
            <dd>
              <strong>${total}</strong>
            </dd>
          </div>
          <div className="flex justify-between">
            <dt>Discount</dt>
            <dd>
              <strong>{`$${
                resultState?.success ? resultState.amount : 0
              }`}</strong>
            </dd>
          </div>
          <div className="flex justify-between border-b-2 border-neutral-200 pb-2">
            <dt>Delivery fee</dt>
            <dd>
              <strong>$22</strong>
            </dd>
          </div>
          <div className="flex justify-between mt-4 items-center">
            <dt>Total</dt>{" "}
            <dd className="text-secondary text-2xl font-bold">
              ${total - (resultState?.success ? resultState.amount : 0)}
            </dd>
          </div>
        </dl>
        <button
          type="submit"
          className="btn btn-primary w-full text-lg h-12 mt-4"
        >
          Proceed to payment
        </button>
      </section>
    </div>
  );
};
