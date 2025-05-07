import Cart from "../components/Cart";

const CartPage: React.FC = () => {
  return (
    <>
      <div className="container mx-auto mt-16">
        <h2 className="text-center mb-16">My Shopping Bag(3 Items)</h2>

        <Cart />

        <section>
          <h2>Related products</h2>
          {/* <Products products={products} filter="all" /> */}
        </section>
      </div>
    </>
  );
};

export default CartPage;
