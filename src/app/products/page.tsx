import Header from "../components/Header";
import AllProducts from "../components/AllProducts";
import { getAllProducts } from "../../../lib/db/products";
import { Suspense } from "react";

const ProductsPage: React.FC = async () => {
  const products = await getAllProducts();

  return (
    <>
      <Header link={false} image="/Landing2.jpg" />
      <div className="container mx-auto mt-16">
        <Suspense fallback={<p>Loading..</p>}>
          <AllProducts products={products} />
        </Suspense>
      </div>
    </>
  );
};

export default ProductsPage;
