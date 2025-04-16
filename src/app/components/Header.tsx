import { StaticImageData } from "next/image";
import Link from "next/link";

const Header: React.FC<{ link: boolean; image: string }> = (props) => {
  return (
    <header
      className="relative min-h-[600px] bg-left bg-cover flex items-center"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="container mx-auto px-4">
        <div>
          <h1 className="mb-2">Gift for your skin</h1>
          <p className="leading-7 text-2xl font mb-4">
            Aliquip fugiat ipsum nostrud ex et eu incididunt <br /> quis minim
            dolore excepteur voluptate
          </p>
          {props.link && (
            <Link className="btn btn-primary" href={""}>
              Shop Now
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
