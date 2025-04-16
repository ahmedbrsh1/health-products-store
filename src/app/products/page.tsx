import Header from "../components/Header";
import AllProducts from "../components/AllProducts";

const ProductsPage: React.FC = () => {
  return (
    <>
      <Header link={false} image="/Landing2.jpg" />
      <div className="container mx-auto mt-16">
        <AllProducts />
      </div>
    </>
  );
};

export default ProductsPage;
