import Review from "./review";

type Product = {
  _id: string;
  title: string;
  description: string;
  prices: number[];
  discount?: number;
  related: string[];
  reviews: Review[];
  sold: number;
  sizes: number[];
  rate: number;
  benefits: string[];
  ingredients: string[];
  faqs: { question: string; answer: string }[];
  categories: string[];
  images: string[];
};
export default Product;
