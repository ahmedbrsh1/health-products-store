import Link from "next/link";
import OrderItem from "../components/OrderItem";
import { getFeaturedProducts } from "../../../lib/db/products";
import Product from "../../../models/Product";

const PurchaseHistoryPage: React.FC = async () => {
  const products: Product[] = await getFeaturedProducts();
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
          {products.map((product) => (
            <OrderItem
              title={product.title}
              image={product.images[0]}
              quantity={1}
              size={product.sizes[0]}
              total={150}
              key={product._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PurchaseHistoryPage;
