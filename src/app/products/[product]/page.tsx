import Product from "@/app/models/product";

import Ingredient1 from "../../../../public/Ingredient1.jpg";
import Ingredient2 from "../../../../public/Ingredient2.jpg";
import Ingredient3 from "../../../../public/Ingredient3.jpg";
import UserImage from "../../../../public/UserImage.png";
import Howtouse from "../../../../public/Howtouse.jpg";
import Benefits from "../../../../public/Benefits.jpg";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { CircleCheck, Pencil, Star } from "lucide-react";

import { getProductById } from "../../../../lib/db/products";
import ImageSelector from "@/app/components/ImageSelector";
import AddToCart from "@/app/components/AddToCart";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ product: string }>;
}) => {
  const id = (await params).product;

  const product: Product = await getProductById(id);

  return (
    <>
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
          <ImageSelector images={product.images} />
          <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <div className="my-6 flex gap-4 items-center">
              <data
                className="font-bold text-5xl text-primary"
                value={
                  product.discount
                    ? (
                        product.prices[0] *
                        (1 - product.discount / 100)
                      ).toFixed(2)
                    : product.prices[0]
                }
              >
                $
                {product.discount
                  ? (product.prices[0] * (1 - product.discount / 100)).toFixed(
                      2
                    )
                  : product.prices[0]}
              </data>
              {product.discount && (
                <span className=" text-neutral-500 text-xl">
                  ${product.prices[0]}
                </span>
              )}
            </div>

            <p className="mb-4">
              In ullamco labore mollit et exercitation fugiat exercitation minim
              ex sint ullamco exercitation amet officia mollit. Qui cillum
              pariatur in con
            </p>
            <div className="flex gap-6">
              <span>
                <strong>{product.reviews.length}</strong> reviews
              </span>
              <span>
                <strong>{product.sold}</strong> sold
              </span>
              <span className="mr-4 flex">
                <Star fill="#F3C63FFF" className="text-[#F3C63FFF]" />
                <Star fill="#F3C63FFF" className="text-[#F3C63FFF]" />
                <Star fill="#F3C63FFF" className="text-[#F3C63FFF]" />
                <Star fill="#F3C63FFF" className="text-[#F3C63FFF]" />
                <Star fill="#F3C63FFF" className="text-[#F3C63FFF]" />
                <strong>{product.rate}</strong>
              </span>
            </div>

            <p className="flex gap-2 my-4">
              <CircleCheck className="text-green-700" /> Free shipping on orders
              over $49USD
            </p>
            <p className="flex gap-2 my-4">
              <CircleCheck className="text-green-700" /> Free + easy returns
            </p>

            <label className="block" htmlFor="size">
              Choose size
            </label>
            <AddToCart sizes={product.sizes} id={product._id.toString()} />
          </div>
        </div>

        <div>
          <h2 className="!text-3xl mb-8">Related Products</h2>
          {/* <Products products={products} filter="all" /> */}
        </div>

        <nav className="mt-24 mb-16">
          <ul className="flex flex-wrap gap-4 justify-center">
            <li className="btn btn-ghost flex-1 h-12 text-primary">
              <a href="#benefits">Benefits</a>
            </li>
            <li className="btn btn-ghost flex-1 h-12 text-primary">
              <a href="#ingredients">Ingredients</a>
            </li>
            <li className="btn btn-ghost flex-1 h-12 text-primary">
              <a href="#howtouse">How to use</a>
            </li>
            <li className="btn btn-ghost flex-1 h-12 text-primary">
              <a href="#reviews">Reviews</a>
            </li>
            <li className="btn btn-ghost flex-1 h-12 text-primary">
              <a href="#faqs">FAQs</a>
            </li>
          </ul>
        </nav>

        <section id="benefits" className="mb-24">
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

        <section id="ingredients" className="mb-24">
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

        <section id="howtouse" className="mb-24">
          <h2>How to use</h2>
          <Image
            src={Howtouse}
            alt="How to use"
            className="rounded-2xl w-full"
          />
        </section>
      </div>

      <section id="reviews" className="mb-24 bg-neutral-100">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h2>Reviews</h2>
            <button className="btn btn-primary btn-outline">
              <Pencil /> Write a review
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
              <div className="grid gap-8">
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
        </div>
      </section>

      <div className="container mx-auto">
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
    </>
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
    <div className="flex gap-4 items-center">
      {props.star}
      <Star fill="#F3C63FFF" className="text-[#F3C63FFF]" />
      <progress
        className="progress w-64"
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
