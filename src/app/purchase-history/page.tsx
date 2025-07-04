import Link from "next/link";
import OrderItem from "../components/OrderItem";

import { cookies } from "next/headers";
import { getUserOrders } from "../../../lib/db/orders";

const PurchaseHistoryPage: React.FC = async () => {
  const cookieStore = cookies();
  const orders = await getUserOrders(cookieStore);
  console.log(orders);

  // const products: Product[] = await getFeaturedProducts();
  return (
    <div className="container mx-auto mt-16 max-w-[50rem]">
      <h2 className="text-center">Purchase history</h2>
      <p className="!text-neutral-500 text-center mb-8">
        Check the status of recent orders, manage returns, and discover similar
        products.
      </p>

      {orders?.map((order) => (
        <div
          key={order.orderNumber}
          className="collapse bg-base-100 border-base-300 border mb-6"
        >
          <input type="checkbox" />
          <div className="collapse-title font-semibold flex justify-between">
            <div>
              <span className="text-neutral-500 mr-2">
                Delivery on March 22,2021
              </span>
              <span>Order#{order.orderNumber}</span>
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
            {order.products.map((product, index) => (
              <OrderItem
                title={product.title}
                image={product.image}
                quantity={product.quantity}
                size={product.size}
                total={product.totalItemPrice}
                key={index}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PurchaseHistoryPage;
