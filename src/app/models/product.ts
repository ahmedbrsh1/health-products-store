import { StaticImageData } from "next/image";

type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: StaticImageData;
  price: number;
  discountedPrice?: number;
};

export default Product;
