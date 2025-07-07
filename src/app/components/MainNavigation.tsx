import Image from "next/image";
import Logo from "../../../public/Logo.png";
import Link from "next/link";
import { cookies } from "next/headers";
import jwt, { JwtPayload } from "jsonwebtoken";
import connect from "../../../lib/db/connect";
import { getUserById } from "../../../lib/db/users";
import NavigationCart from "./NavigationCart";
import { Menu } from "lucide-react";

const MainNavigation: React.FC = async () => {
  const token = (await cookies()).get("token")?.value;
  let user;
  if (token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload & {
      userId: string;
    };
    const { userId } = decoded;
    await connect();
    user = await getUserById(userId);
  }

  return (
    <div className="container mx-auto">
      <nav className="flex items-center justify-between gap-2 ">
        <Link href="/">
          <Image src={Logo} alt="Logo" priority className="min-w-12 " />
        </Link>
        <input
          placeholder="Search product..."
          type="text"
          className="input max-w-40 md:hidden"
        />
        <div className="group gap-0 md:flex-1 lg:max-w-2/3 md:gap-2 flex flex-col relative">
          <div className="absolute hidden md:static right-0 top-full z-10 bg-white px-8 py-4 rounded-bl-md rounded-br-md md:flex md:items-center  md:justify-between group-hover:block md:group-hover:flex gap-2  ">
            <ul className="md:flex gap-4">
              <li>
                <Link href="/products">Shop</Link>
              </li>
              <li>
                <Link href="/shop">Offers</Link>
              </li>
              <li>
                <Link href="/shop" className="whitespace-nowrap">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/shop">Blog</Link>
              </li>
            </ul>

            <div className="md:flex gap-2 items-center">
              <input
                placeholder="Search product..."
                type="text"
                className="input max-w-40 hidden md:block "
              />
              <NavigationCart />
              {!user && <Link href="/login">Sign in</Link>}
              {user && <button>{user.fname}</button>}
            </div>
          </div>

          <Menu className="md:hidden" />
        </div>
      </nav>
    </div>
  );
};

export default MainNavigation;
