import Image from "next/image";
import Logo from "../../../public/Logo.png";
import Link from "next/link";

const MainNavigation: React.FC = () => {
  return (
    <div className="container mx-auto">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src={Logo} alt="Logo" priority />
        </Link>
        <ul className="flex gap-4 ">
          <li>
            <Link href="/products">Shop</Link>
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
          <Link href={"/cart"}>Cart(0)</Link>
          <button>User</button>
        </div>
      </nav>
    </div>
  );
};

export default MainNavigation;
