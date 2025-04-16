import Product from "@/app/models/product";
import Product2 from "../../../../public/Product2.jpg";

import QuantityInput from "@/app/components/QuantityInput";
const ProductPage: React.FC = () => {
  const product: Product = {
    id: 2,
    title: "b",
    description: "cbd",
    category: "body",
    image: Product2,
    price: 13,
    discountedPrice: 12,
  };

  return (
    <div className="container mx-auto">
      <div>
        <div>Images</div>
        <div>
          <h2>Product Name</h2>
          <p>Aliquip fugiat ipsum nostrud ex et eu incididunt</p>
          <data
            className="font-bold text-5xl mr-2 text-primary"
            value={
              product.discountedPrice ? product.discountedPrice : product.price
            }
          >
            ${product.discountedPrice ? product.discountedPrice : product.price}
          </data>
          {product.discountedPrice && (
            <span className=" text-neutral-500">${product.price}</span>
          )}
          <div>
            <span>368 reviews</span>
            <span>823 sold</span>
            <span>&&&&& 4.5</span>
          </div>

          <div>Free shipping on orders over $49USD</div>
          <div>Free + easy returns</div>

          <label htmlFor="size">Choose size</label>
          <select name="size" id="size">
            <option value="50">50.00 ML</option>
            <option value="50">100.00 ML</option>
          </select>

          <QuantityInput />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
