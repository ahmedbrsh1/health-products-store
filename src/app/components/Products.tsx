import Image from "next/image";
import Product from "../models/product";

const Products: React.FC<{ products: Product[]; filter: string }> = (props) => {
  let filteredProducts = props.products;

  if (props.filter !== "all") {
    filteredProducts = filteredProducts.filter((product) =>
      product.category.split("-").some((term) => term === props.filter)
    );
  }
  return (
    <>
      <ul className="grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {filteredProducts.map((product: Product) => (
          <li key={product.id}>
            <article>
              <Image
                className="mb-4 rounded"
                src={product.image}
                alt={`Product ${product.id} Image`}
              />
              <h5>{product.title}</h5>
              <p className="mb-4">{product.description}</p>
              <data
                className="font-bold text-3xl mr-2 text-neutral-700"
                value={
                  product.discountedPrice
                    ? product.discountedPrice
                    : product.price
                }
              >
                $
                {product.discountedPrice
                  ? product.discountedPrice
                  : product.price}
              </data>
              {product.discountedPrice && (
                <span className="line-through text-neutral-500">
                  ${product.price}
                </span>
              )}
            </article>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
