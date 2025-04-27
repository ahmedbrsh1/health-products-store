import Image, { StaticImageData } from "next/image";

import LandingImage from "../../public/Landing.jpg";
import Ourstory from "../../public/Ourstory.jpg";
import Link from "next/link";
import HomeProducts from "./components/HomeProducts";

import Instagram1 from "../../public/Instagram1.jpg";
import Instagram2 from "../../public/Instagram2.jpg";
import Instagram3 from "../../public/Instagram3.jpg";
import Instagram4 from "../../public/Instagram4.jpg";
import Instagram5 from "../../public/Instagram5.jpg";
import Instagram6 from "../../public/Instagram6.jpg";
import Instagram7 from "../../public/Instagram7.jpg";
import Instagram8 from "../../public/Instagram8.jpg";
import Instagram9 from "../../public/Instagram9.jpg";
import Instagram10 from "../../public/Instagram10.jpg";
import Instagram11 from "../../public/Instagram11.jpg";
import Instagram12 from "../../public/Instagram12.jpg";
import Article1 from "../../public/Article1.jpg";
import Article2 from "../../public/Article2.jpg";
import Header from "./components/Header";
import { getFeaturedProducts } from "../../lib/db/products";

const images = [
  Instagram1,
  Instagram2,
  Instagram3,
  Instagram4,
  Instagram5,
  Instagram6,
  Instagram7,
  Instagram8,
  Instagram9,
  Instagram10,
  Instagram11,
  Instagram12,
];

export default async function Home() {
  const products = await getFeaturedProducts();
  const events = [
    {
      id: 1,
      title: "Relaxing & Pampering",
      description: "Pariatur ad nisi ex tempor ea",
    },
    {
      id: 2,
      title: "Smooth & Bright Skin",
      description: "Pariatur ad nisi ex tempor ea",
    },
  ];

  return (
    <>
      <Header link={true} image="/Landing.jpg" />

      <HomeSection title="Our Products">
        <HomeProducts products={products} />
      </HomeSection>

      <HomeSection title="Event promotion">
        <div className="grid sm:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <Event
              key={index}
              id={event.id}
              title={event.title}
              subtitle={event.description}
            />
          ))}
        </div>
      </HomeSection>
      <HomeSection title="Our story">
        <div>
          <Image src={Ourstory} alt="Video" className="w-full" />
        </div>
      </HomeSection>

      <HomeSection>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex flex-col justify-between p-5">
            <div>
              <h2 className="mb-8">Read What's New</h2>
              <p className="!text-neutral-900 text-xl">
                Sint consequat in ipsum irure adipisicing dolore culpa
                incididunt. Veniam elit magna anim ipsum eiusmod eu
              </p>
            </div>
            <div>
              <Link className="btn btn-lg btn-outline btn-primary" href={""}>
                Explore more
              </Link>
            </div>
          </div>
          <Blog
            img={Article1}
            title="Anim sint Lorem excepteur commodo"
            date="Oct 12, 2022"
          />
          <Blog
            img={Article2}
            title="Adipisicing elit proident in elit magna deser"
            date="Oct 12, 2022"
          />
        </div>
      </HomeSection>

      <HomeSection title="Instagram">
        <div className="text-center mb-8">
          <Link className="text-2xl" href="www.instagram.com">
            @Lorem
          </Link>
        </div>
        <div className="grid grid-cols-6 gap-4">
          {images.map((image, index) => (
            <Image
              className="w-full h-full"
              src={image}
              key={index}
              alt={`Instagram${index}`}
            />
          ))}
        </div>
      </HomeSection>
    </>
  );
}

const Event: React.FC<{ id: number; title: string; subtitle: string }> = (
  props
) => {
  return (
    <article
      className="p-10 min-h-80 bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `url(/HomeImg${props.id}.jpg)`,
      }}
    >
      <div className="w-1/2 ">
        <h3 className="mb-4">{props.title}</h3>
        <p className="text-2xl  mb-8">{props.subtitle}</p>

        <Link href={""} className="btn btn-wide btn-primary">
          Explore
        </Link>
      </div>
    </article>
  );
};

const Blog: React.FC<{ img: StaticImageData; title: string; date: string }> = (
  props
) => {
  return (
    <article className="rounded-xl  border-neutral-300 border overflow-hidden ">
      <Image src={props.img} alt="Article 1 Image" className="w-full" />
      <div className="p-5">
        <h4 className="mb-6">{props.title}</h4>
        <p className="!text-neutral-600 text-sm">{props.date}</p>
      </div>
    </article>
  );
};

const HomeSection: React.FC<{ title?: string; children: React.ReactNode }> = (
  props
) => {
  return (
    <>
      <div className="container mx-auto mt-40">
        {props.title && <h2 className="text-center mb-12">{props.title}</h2>}
        <div>{props.children}</div>
      </div>
    </>
  );
};
