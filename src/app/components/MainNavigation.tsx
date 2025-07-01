import Image from "next/image";
import Logo from "../../../public/Logo.png";
import Link from "next/link";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import connect from "../../../lib/db/connect";
import { getUserById } from "../../../lib/db/users";

const MainNavigation: React.FC = async () => {
  const token = (await cookies()).get("token")?.value;
  let user;
  if (token) {
    const { userId }: any = jwt.verify(token, process.env.JWT_SECRET!);
    await connect();
    user = await getUserById(userId);
  }

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

          <Link href="/cart">Cart</Link>

          {!user && <Link href="/login">Sign in</Link>}
          {user && <button>user.fname</button>}
        </div>
      </nav>
    </div>
  );
};

export default MainNavigation;
