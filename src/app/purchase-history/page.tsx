import Link from "next/link";
import OrderItem from "../components/OrderItem";
import Product1 from "../../../public/Product1.jpg";
import Product2 from "../../../public/Product2.jpg";
const PurchaseHistoryPage: React.FC = () => {
  return (
    <div className="container mx-auto mt-16 max-w-[50rem]">
      <h2 className="text-center">Purchase history</h2>
      <p className="!text-neutral-500 text-center mb-8">
        Check the status of recent orders, manage returns, and discover similar
        products.
      </p>

      <div className="collapse bg-base-100 border-base-300 border mb-6">
        <input type="checkbox" />
        <div className="collapse-title font-semibold flex justify-between">
          <div>
            <span className="text-neutral-500 mr-2">
              Delivery on March 22,2021
            </span>
            <span>Order#4376</span>
          </div>
          <div>
            <Link className="text-neutral-500 text-sm underline" href={""}>
              Manage order
            </Link>{" "}
            <Link className="text-neutral-500 text-sm underline" href={""}>
              View invoice
            </Link>
          </div>
        </div>
        <div className="collapse-content text-sm">
          <OrderItem
            title="Product name"
            image={Product1}
            quantity={2}
            size={50}
            total={100}
          />
          <OrderItem
            title="Product name"
            image={Product1}
            quantity={2}
            size={50}
            total={100}
          />
        </div>
      </div>
    </div>
  );
};

export default PurchaseHistoryPage;
