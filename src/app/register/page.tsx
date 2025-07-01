import { Link } from "lucide-react";
import TextInput from "../components/TextInput";
import { registerAction } from "../actions/auth";

export default function RegisterPage() {
  return (
    <form
      action={registerAction}
      className="p-4 border border-neutral-200 rounded max-w-96"
    >
      <h3 className="!text-neutral-900">Welcome back</h3>
      <p className="!text-neutral-700 mb-16">Log in to your account</p>
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
              <Link className="text-primary">
                Terms of Use & Privacy Policy
              </Link>
            </label>
          </div>
        </div>
        <button className="btn btn-primary w-full mb-16">Register</button>
      </div>

      <div className="divider">OR</div>
    </form>
  );
}
