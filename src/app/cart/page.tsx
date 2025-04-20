import Image from "next/image";
import { CheckCircle, CreditCard } from "lucide-react";
import Link from "next/link";
import Products from "../components/Products";
import Product from "../models/product";

import Product1 from "../../../public/Product1.jpg";
import Product2 from "../../../public/Product2.jpg";
import Product3 from "../../../public/Product3.jpg";
import Product4 from "../../../public/Product4.jpg";

const products: Product[] = [
  {
    id: 1,
    title: "Oil",
    description: "abc",
    category: "bestseller",
    image: Product1,
    price: 12,
  },
  {
    id: 2,
    title: "Shampoo",
    description: "cbd",
    category: "bestseller",
    image: Product2,
    price: 15,
    discountedPrice: 12,
  },
  {
    id: 3,
    title: "Conditioner",
    description: "cbd",
    category: "bestseller",
    image: Product3,
    price: 15,
    discountedPrice: 12,
  },
  {
    id: 4,
    title: "Body wash",
    description: "cbd",
    category: "bestseller",
    image: Product4,
    price: 15,
    discountedPrice: 12,
  },
];
const CartPage: React.FC = () => {
  return (
    <>
      <div className="container mx-auto mt-16">
        <h2 className="text-center">My Shopping Bag(3 Items)</h2>

        <div className="grid md:grid-cols-[1fr_auto] gap-4 mb-16">
          <div>
            <section className="p-4 border border-neutral-200 rounded mb-4">
              <h3>Order Summary</h3>
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
                  <tr>
                    <td className="flex items-center gap-4">
                      <Image
                        className="w-16"
                        src={Product3}
                        alt="ProductImage"
                      />
                      <span>Product Name</span>
                    </td>
                    <td>$52</td>
                    <td>2</td>
                    <td>$104</td>
                    <td>Delete</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className="p-4 border border-neutral-200 rounded mb-4">
              <h3>Delivery options</h3>
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
              <h4>Customer Information</h4>
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
            <h5>Payment Method</h5>
            <Link href={""}>Change payment methods</Link>
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
                className="border border-neutral-200 rounded"
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
              <h5 className="mb-4">Summary</h5>
              <dl>
                <div className="flex justify-between">
                  <dt>Subtotal</dt>
                  <dd>$180</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Discount</dt>
                  <dd>-$15</dd>
                </div>
                <div className="flex justify-between border-b-2 border-neutral-200 pb-2">
                  <dt>Delivery fee</dt>
                  <dd>$22</dd>
                </div>
                <div className="flex justify-between mt-4 items-center">
                  <dt>Total</dt>{" "}
                  <dd className="text-secondary text-2xl font-bold">$187</dd>
                </div>
              </dl>
            </section>
          </div>
        </div>

        <section>
          <h2>Related products</h2>
          <Products products={products} filter="all" />
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
        className="flex gap-4 border border-neutral-400 p-4 rounded peer-checked:border-primary peer-checked:bg-[#F2F2FDFF]"
      >
        <CheckCircle />
        <div>
          <h5>${props.price}</h5>
          <p>{props.title} delivery</p>
          <p>Est.arrival: {props.arrival}</p>
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
        className="flex justify-between  border border-neutral-400 p-4 rounded peer-checked:border-primary peer-checked:bg-[#F2F2FDFF] mb-4"
      >
        <div className="flex">
          <CreditCard className="mr-2" />
          <p>{props.type}</p>
        </div>

        <p>{props.last4}</p>
      </label>
    </div>
  );
};
