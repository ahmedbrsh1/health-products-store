import {
  Calendar,
  CreditCard,
  DollarSign,
  LucideIcon,
  ReceiptText,
  User,
  Wallet,
} from "lucide-react";
import OrderItem from "../../components/OrderItem";
import Link from "next/link";
import { getOrderDetails } from "../../../../lib/db/orders";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

const PurchasePage: React.FC<{
  params: Promise<{ purchase: number }>;
}> = async ({ params }) => {
  const orderNumber = (await params).purchase;
  const cookieStore = cookies(); // ✅ only works here
  const order = await getOrderDetails(orderNumber.toString(), cookieStore);
  console.log(order);

  if (!order) {
    notFound();
  }

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
            <dd className="font-bold">{order.customerName}</dd>
          </DataRow>
          <DataRow title="Payment method" icon={Wallet}>
            <dd className="font-bold">
              <CreditCard />
            </dd>
          </DataRow>
        </section>
        <section className="mb-4">
          <DataRow title="Order number" icon={ReceiptText}>
            <dd className="font-bold">{order.orderNumber}</dd>
          </DataRow>
          <DataRow title="Total" icon={DollarSign}>
            <dd className="font-bold text-xl">${order.totalPrice}</dd>
          </DataRow>
        </section>

        <h5 className="!text-2xl border-b border-neutral-200 pb-2">
          Order line
        </h5>
        <ul className="my-8">
          {order.products.map((product) => (
            <OrderItem
              image={product.image}
              title={product.title}
              quantity={product.quantity}
              size={product.size}
              total={product.totalItemPrice}
              key={product._id}
            />
          ))}
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
