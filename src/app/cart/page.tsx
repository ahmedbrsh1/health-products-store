import Image from "next/image";
import Product3 from "../../../public/Product3.jpg";
import { CheckCircle, CreditCard } from "lucide-react";
import Link from "next/link";

const CartPage: React.FC = () => {
  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-center">My Shopping Bag(3 Items)</h2>
        {/* I stopped Here */}
        <div className="grid md:grid-cols-[1fr_auto] gap-4">
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

            <section className="p-4 border border-neutral-200 rounded">
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
              <div className="grid md:grid-cols-[auto_1fr] gap-x-4 gap-y-6 mb-4">
                <CustomerInput name="fullname" label="Full name" />
                <CustomerInput name="phonenumber" label="Phone number" />
                <CustomerInput name="address" label="Address" />
              </div>
              <input
                type="checkbox"
                id="default"
                className="checkbox checkbox-primary mr-2"
              />
              <label htmlFor="default">Save as default</label>
            </section>
          </div>
          <div className="border border-primary rounded h-fit p-8">
            <h5>Payment Method</h5>
            <Link href={""}>Change payment methods</Link>
            <ul>
              <li>
                <PaymentMethod id="1" type="Mastercard" last4="5987" />
              </li>
            </ul>
          </div>
        </div>
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

const CustomerInput: React.FC<{ label: string; name: string }> = (props) => {
  return (
    <div>
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
        className="flex justify-between  border border-neutral-400 p-4 rounded peer-checked:border-primary peer-checked:bg-[#F2F2FDFF]"
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
