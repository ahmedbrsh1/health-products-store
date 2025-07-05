import { cookies } from "next/headers";
import Cart from "../components/Cart";

const CartPage: React.FC = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  return (
    <>
      <div className="container mx-auto mt-16">
        <Cart token={token} />

        <section>
          <h2>Related products</h2>
          {/* <Products products={products} filter="all" /> */}
        </section>
      </div>
    </>
  );
};

export default CartPage;
