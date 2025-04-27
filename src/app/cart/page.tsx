import {
  CheckCircle,
  CreditCard,
  ReceiptText,
  ShoppingCart,
  Truck,
  UserCircle,
} from "lucide-react";
import Link from "next/link";
import Products from "../components/Products";
import CartItems from "../components/CartItems";

const CartPage: React.FC = () => {
  return (
    <>
      <div className="container mx-auto mt-16">
        <h2 className="text-center mb-16">My Shopping Bag(3 Items)</h2>

        <div className="grid md:grid-cols-[1fr_auto] gap-4 mb-16">
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
                  <CartItems />
                </tbody>
              </table>
            </section>

            <section className="p-4 border border-neutral-200 rounded mb-4">
              <h5 className="flex gap-2 mb-4">
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
                <CustomerInput name="fullname" label="Full name" />
                <CustomerInput name="phonenumber" label="Phone number" />
                <CustomerInput
                  className="md:col-span-2"
                  name="address"
                  label="Address"
                />
              </div>
              <input
                type="checkbox"
                id="default"
                className="checkbox checkbox-primary mr-2"
              />
              <label htmlFor="default">Save as default</label>
            </section>
          </div>
          <div className="border border-primary rounded-2xl h-fit p-8">
            <h5 className="mb-4">Payment Method</h5>
            <Link className="text-sm text-info mb-2 block" href={""}>
              Change payment methods
            </Link>
            <ul className="mb-8">
              <li>
                <PaymentMethod id="1" type="Mastercard" last4="5987" />
                <PaymentMethod id="2" type="Mastercard" last4="5987" />
              </li>
            </ul>
            <label className="mb-2 block" htmlFor="voucher">
              Voucher
            </label>
            <div className="flex gap-2 mb-2">
              <input
                className="border border-neutral-200 rounded-lg pl-2"
                type="text"
                id="voucher"
                name="voucher"
              />
              <button className="btn btn-primary btn-soft">Apply</button>
            </div>
            <span className="bg-secondary rounded-full px-2 py-1 text-white ">
              $15 Off
            </span>
            <section className="mt-8">
              <h5 className="flex gap-2 mb-4">
                <ReceiptText className="text-[#EA916EFF]" />
                Summary
              </h5>
              <dl>
                <div className="flex justify-between">
                  <dt>Subtotal</dt>
                  <dd>
                    <strong>$180</strong>
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt>Discount</dt>
                  <dd>
                    <strong>-$15</strong>
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
                  <dd className="text-secondary text-2xl font-bold">$187</dd>
                </div>
              </dl>
              <Link
                className="btn btn-primary w-full text-lg h-12 mt-4"
                href={""}
              >
                Proceed to payment
              </Link>
            </section>
          </div>
        </div>

        <section>
          <h2>Related products</h2>
          {/* <Products products={products} filter="all" /> */}
        </section>
      </div>
    </>
  );
};

export default CartPage;

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

const CustomerInput: React.FC<{
  label: string;
  name: string;
  className?: string;
}> = (props) => {
  return (
    <div className={props.className}>
      <label className="block" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        type="text"
        name={props.name}
        id={props.name}
        className="bg-neutral-200 p-1 rounded w-full"
      />
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
