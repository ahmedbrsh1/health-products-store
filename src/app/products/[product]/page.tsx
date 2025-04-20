import Product from "@/app/models/product";
import Product2 from "../../../../public/Product2.jpg";

import Productsub1 from "../../../../public/Productsub1.jpg";
import Productsub2 from "../../../../public/Productsub2.jpg";
import Productsub3 from "../../../../public/Productsub3.jpg";
import Productsub4 from "../../../../public/Productsub4.jpg";
import Ingredient1 from "../../../../public/Ingredient1.jpg";
import Ingredient2 from "../../../../public/Ingredient2.jpg";
import Ingredient3 from "../../../../public/Ingredient3.jpg";
import UserImage from "../../../../public/UserImage.png";
import Howtouse from "../../../../public/Howtouse.jpg";
import Benefits from "../../../../public/Benefits.jpg";
import Product1 from "../../../../public/Product1.jpg";

import QuantityInput from "@/app/components/QuantityInput";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import Products from "@/app/components/Products";

import Product3 from "../../../../public/Product3.jpg";
import Product4 from "../../../../public/Product4.jpg";

const products: Product[] = [
  {
    id: 1,
    title: "Oil",
    description: "abc",
    category: "bestseller",
    image: Product1,
    price: 12,
  },
  {
    id: 2,
    title: "Shampoo",
    description: "cbd",
    category: "bestseller",
    image: Product2,
    price: 15,
    discountedPrice: 12,
  },
  {
    id: 3,
    title: "Conditioner",
    description: "cbd",
    category: "bestseller",
    image: Product3,
    price: 15,
    discountedPrice: 12,
  },
  {
    id: 4,
    title: "Body wash",
    description: "cbd",
    category: "bestseller",
    image: Product4,
    price: 15,
    discountedPrice: 12,
  },
];

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
    <div className="container mx-auto mt-16">
      <div className="mb-4">
        <Link className="text-primary" href="/">
          Home
        </Link>
        &gt;
        <Link className="text-primary" href="/shop">
          Shop
        </Link>
        &gt;
        <span>Detail</span>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-24">
        <div className="flex">
          <div className="mr-8">
            <Image src={Productsub1} alt="Product Image" />
            <Image src={Productsub2} alt="Product Image" />
            <Image src={Productsub3} alt="Product Image" />
            <Image src={Productsub4} alt="Product Image" />
          </div>
          <div>
            <Image src={Product1} alt="Product Image" />
          </div>
        </div>
        <div>
          <h2>Product Name</h2>
          <p>Aliquip fugiat ipsum nostrud ex et eu incididunt</p>
          <div className="my-6">
            <data
              className="font-bold text-5xl mr-2 text-primary"
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
              <span className=" text-neutral-500">${product.price}</span>
            )}
          </div>

          <p className="mb-4">
            In ullamco labore mollit et exercitation fugiat exercitation minim
            ex sint ullamco exercitation amet officia mollit. Qui cillum
            pariatur in con
          </p>
          <div>
            <span className="mr-4">368 reviews</span>
            <span className="mr-4">823 sold</span>
            <span className="mr-4">&&&&& 4.5</span>
          </div>

          <div className="my-4">Free shipping on orders over $49USD</div>
          <div className="my-4">Free + easy returns</div>

          <label className="block" htmlFor="size">
            Choose size
          </label>
          <select name="size" id="size" className="mb-6">
            <option value="50">50.00 ML</option>
            <option value="50">100.00 ML</option>
          </select>

          <QuantityInput />

          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <button className="btn btn-outline btn-primary  btn-wide">
              Add to bag
            </button>
            <button className="btn btn-primary btn-wide">Checkout</button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="!text-3xl mb-4">Related Products</h2>
        <Products products={products} filter="all" />
      </div>

      <nav className="mt-24">
        <ul className="flex gap-4 justify-center">
          <li>
            <a href="#benefits" className="btn btn-lg btn-soft btn-primary">
              Benefits
            </a>
          </li>
          <li>
            <a href="#ingredients" className="btn btn-lg btn-soft btn-primary">
              Ingredients
            </a>
          </li>
          <li>
            <a href="#howtouse" className="btn btn-lg btn-soft btn-primary">
              How to use
            </a>
          </li>
          <li>
            <a href="#reviews" className="btn btn-lg btn-soft btn-primary">
              Reviews
            </a>
          </li>
          <li>
            <a href="#faqs" className="btn btn-lg btn-soft btn-primary">
              FAQs
            </a>
          </li>
        </ul>
      </nav>

      <section id="benefits">
        <div className="grid md:grid-cols-2 items-center gap-16">
          <div>
            <h2>Benefits</h2>
            <p className="mb-8">
              Consectetur excepteur elit ullamco incididunt voluptate tempor
              exercitation. Lorem commodo ullamco quis velit officia aute
              laboris elit sit exercitation ut esse pariatur occaecat quis
            </p>
            <div></div>
            <h4 className="!font-bold">Laboris consequat ad</h4>
            <p className="mb-8">
              Consectetur excepteur elit ullamco incididunt voluptate tempor
              exercitation. Lorem commodo ullamco quis velit officia aute
              laboris elit sit exercitation ut esse pariatur
            </p>
            <h4 className="!font-bold">Duis duis do labore pariatur </h4>
            <p className="mb-8">
              Ad qui aliqua nulla nostrud consectetur laboris nostrud commodo
              voluptate. Lorem id qui laborum aute voluptate{" "}
            </p>
            <h4 className="!font-bold">Deserunt ex</h4>
            <p className="mb-8">
              Cupidatat culpa id do laboris nisi aliqua eu. Veniam aliqua duis
              Lorem adipisicing et minim velit quis{" "}
            </p>
          </div>
          <Image className="w-full" src={Benefits} alt="Benefits Image" />
        </div>
      </section>

      <section id="ingredients">
        <h2>Ingredients</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Ingredient
            image={Ingredient1}
            title="Hyaluronic acid"
            description="Elit do sit excepteur duis labore nisi sit anim adipisicing duis incididunt sit anim sint est exercitation aute consectetur irure"
          />
          <Ingredient
            image={Ingredient2}
            title="Green tea"
            description="Tempor adipisicing aute pariatur magna enim Lorem voluptate incididunt culpa ex veniam sunt occaecat tempor "
          />
          <Ingredient
            image={Ingredient3}
            title="Olive oil"
            description="Cupidatat culpa id do laboris nisi aliqua eu. Veniam aliqua duis Lorem adipisicing et minim velit quis "
          />
        </div>
        <div className="text-center mt-4">
          <Link href="" className="btn btn-outline btn-primary btn-wide">
            See full list
          </Link>
        </div>
      </section>

      <section id="howtouse">
        <h2>How to use</h2>
        <Image src={Howtouse} alt="How to use" className="rounded-2xl w-full" />
      </section>

      <section id="reviews">
        <div className="flex justify-between items-center">
          <h2>Reviews</h2>
          <button className="btn btn-primary btn-outline">
            Write a review
          </button>
        </div>
        <div className="grid md:grid-cols-[auto_1fr] gap-16">
          <div>
            <div className="flex items-center">
              <h2 className="!text-neutral-900">4.5</h2>
              <div className="mx-4 flex">
                <Star fill="#F3C63FFF" className="text-[#F3C63FFF]" />
                <Star fill="#F3C63FFF" className="text-[#F3C63FFF]" />
                <Star fill="#F3C63FFF" className="text-[#F3C63FFF]" />
                <Star fill="#F3C63FFF" className="text-[#F3C63FFF]" />
                <Star fill="#F3C63FFF" className="text-[#F3C63FFF]" />
              </div>
              <span className="text-neutral-900">368 Reviews</span>
            </div>
            <div>
              <Percentage star={5} value={60} />
              <Percentage star={4} value={25} />
              <Percentage star={3} value={10} />
              <Percentage star={2} value={5} />
              <Percentage star={1} value={0} />
            </div>
          </div>
          <div>
            <Review
              name="Annie Haley"
              date="3d ago"
              rating={4}
              review="Commodo consequat quis nisi dolor laboris in aute occaecat quis consequat culpa consectetur aliqua. Laborum cupidatat id reprehenderit non cillum irure sunt commodo."
            />
            <Review
              name="Annie Haley"
              date="3d ago"
              rating={4}
              review="Commodo consequat quis nisi dolor laboris in aute occaecat quis consequat culpa consectetur aliqua. Laborum cupidatat id reprehenderit non cillum irure sunt commodo."
            />
            <Review
              name="Annie Haley"
              date="3d ago"
              rating={4}
              review="Commodo consequat quis nisi dolor laboris in aute occaecat quis consequat culpa consectetur aliqua. Laborum cupidatat id reprehenderit non cillum irure sunt commodo."
            />
          </div>
        </div>
      </section>

      <section id="faqs">
        <h2 className="mb-4">FAQs</h2>
        <ul className="grid gap-4 md:grid-cols-2">
          <FAQ
            title="Lorem Lorem Lorem"
            content="Lorem Lorem LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem Lorem"
          />
          <FAQ
            title="Lorem Lorem Lorem"
            content="Lorem Lorem LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem Lorem"
          />
          <FAQ
            title="Lorem Lorem Lorem"
            content="Lorem Lorem LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem Lorem"
          />
        </ul>
      </section>
    </div>
  );
};

export default ProductPage;

const Ingredient: React.FC<{
  image: StaticImageData;
  title: string;
  description: string;
}> = (props) => {
  return (
    <article>
      <Image
        className="rounded-t-2xl w-full"
        src={props.image}
        alt="Ingredient Image"
      />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </article>
  );
};

const Percentage: React.FC<{ value: number; star: number }> = (props) => {
  return (
    <div className="flex items-center">
      {props.star}
      Star
      <progress
        className="progress mx-4 w-48"
        value={props.value}
        max={100}
      ></progress>
      {props.value}%
    </div>
  );
};

const Review: React.FC<{
  name: string;
  date: string;
  rating: number;
  review: string;
}> = (props) => {
  return (
    <article className="mb-6">
      <div className="flex">
        <Image src={UserImage} alt="User Image" />
        <div className="content-center">
          <div className="flex items-center mb-1">
            <h5 className="!text-sm mr-1">{props.name}</h5>
            <span className="text-neutral-600 text-sm">{props.date}</span>
          </div>
          <div className="flex">
            <Star fill="#F3C63FFF" className="text-[#F3C63FFF]" />
            <Star fill="#F3C63FFF" className="text-[#F3C63FFF]" />
            <Star fill="#F3C63FFF" className="text-[#F3C63FFF]" />
            <Star fill="#F3C63FFF" className="text-[#F3C63FFF]" />
            <Star fill="#F3C63FFF" className="text-[#F3C63FFF]" />
          </div>
        </div>
      </div>
      <p>{props.review}</p>
    </article>
  );
};

const FAQ: React.FC<{ title: string; content: string }> = (props) => {
  return (
    <li>
      <div className="collapse bg-base-100 border border-base-300 group">
        <input
          type="radio"
          name="my-accordion-1"
          id={`section-${props.title}`}
          className="peer"
        />
        <div className="collapse-title font-semibold peer-checked:text-primary peer-checked:font-bold transition-all">
          {props.title}
        </div>
        <div className="collapse-content text-sm">{props.content}</div>
      </div>
    </li>
  );
};
