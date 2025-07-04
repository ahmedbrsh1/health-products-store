import Link from "next/link";
import TextInput from "../components/TextInput";
import { registerAction } from "../actions/auth";
import { Facebook } from "lucide-react";
import { Apple } from "lucide-react";
export default function RegisterPage() {
  return (
    <form
      action={registerAction}
      className="p-4 border border-neutral-200 rounded max-w-96"
    >
      <h3 className="!text-neutral-900">Let&apos;s get started</h3>
      <p className="!text-neutral-700 mb-16">Sign up your account</p>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <TextInput label="First Name" name="fname" />
          <TextInput label="Last Name" name="lname" />
        </div>
        <TextInput label="Email" name="email" />
        <TextInput label="Password" name="password" type="password" />
        <div className="flex justify-between">
          <div>
            <input
              type="checkbox"
              id="rememberme"
              className="checkbox rounded checkbox-primary checkbox-sm mr-2"
            />
            <label htmlFor="rememberme">
              By signing up, I agree with the{" "}
              <Link href={"/terms"} className="text-primary">
                Terms of Use & Privacy Policy
              </Link>
            </label>
          </div>
        </div>
        <button className="btn btn-primary w-full mb-16">Register</button>
      </div>

      <div className="divider">OR</div>
      <div className="flex justify-center gap-2">
        <span className="rounded-full bg-blue-100 h-10 w-10 flex justify-center items-center">
          <Facebook />
        </span>
        <span className="rounded-full bg-red-100  h-10 w-10  flex justify-center items-center">
          <p className="!text-red-800 !font-extrabold">G</p>
        </span>
        <span className="rounded-full bg-gray-200  h-10 w-10  flex justify-center items-center">
          <Apple />
        </span>
      </div>
    </form>
  );
}
