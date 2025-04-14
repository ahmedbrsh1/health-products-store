import Image from "next/image";
import Logo from "../../../public/Logo.png";
import Link from "next/link";

const MainNavigation: React.FC = () => {
  return (
    <div className="container mx-auto">
      <nav className="flex justify-between items-center">
        <Image src={Logo} alt="Logo" priority />
        <ul className="flex gap-4 ">
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/shop">Offers</Link>
          </li>
          <li>
            <Link href="/shop">Our Story</Link>
          </li>
          <li>
            <Link href="/shop">Blog</Link>
          </li>
        </ul>
        <div>
          <input type="text" />
          <button>Cart(0)</button>
          <button>User</button>
        </div>
      </nav>
    </div>
  );
};

export default MainNavigation;
