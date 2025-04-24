import Product1 from "../../../public/Product1.jpg";
import Product2 from "../../../public/Product2.jpg";

import {
  Calendar,
  CreditCard,
  DollarSign,
  LucideIcon,
  ReceiptText,
  User,
  Wallet,
} from "lucide-react";
import OrderItem from "../components/OrderItem";
import Link from "next/link";

const PurchasePage: React.FC = () => {
  return (
    <div className="container mx-auto mt-16">
      <h2 className="text-center">Thank you for your purchase!</h2>
      <p className="text-center !text-neutral-500 mb-8">
        You will receive an confirmation letter through your email
      </p>
      <div className="border border-neutral-200 p-4 rounded mx-auto max-w-[50rem]">
        <section className="border-b border-neutral-200">
          <DataRow title="Date" icon={Calendar}>
            <dd className="font-bold">27/04/2022</dd>
          </DataRow>
          <DataRow title="Customer" icon={User}>
            <dd className="font-bold">Alvaro Garcia</dd>
          </DataRow>
          <DataRow title="Payment method" icon={Wallet}>
            <dd className="font-bold">
              <CreditCard />
            </dd>
          </DataRow>
        </section>
        <section className="mb-4">
          <DataRow title="Order number" icon={ReceiptText}>
            <dd className="font-bold">732-123-4567</dd>
          </DataRow>
          <DataRow title="Total" icon={DollarSign}>
            <dd className="font-bold text-xl">$187</dd>
          </DataRow>
        </section>

        <h5 className="!text-2xl border-b border-neutral-200 pb-2">
          Order line
        </h5>
        <ul className="my-8">
          <OrderItem
            image={Product1}
            title="Product name"
            quantity={2}
            size={50}
            total={104}
          />
          <OrderItem
            image={Product2}
            title="Product name"
            quantity={2}
            size={50}
            total={104}
          />
        </ul>

        <Link className="btn btn-primary" href={"products"}>
          Continue shopping
        </Link>
      </div>
    </div>
  );
};

export default PurchasePage;

const DataRow: React.FC<{
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}> = (props) => {
  const Icon = props.icon;
  return (
    <div className="flex justify-between my-4">
      <div className="flex gap-2">
        <Icon color="#636AE8FF" />
        <dt className="text-neutral-500">{props.title}</dt>
      </div>
      {props.children}
    </div>
  );
};
