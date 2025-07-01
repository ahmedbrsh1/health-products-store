"use client";

import { Link } from "lucide-react";
import TextInput from "../components/TextInput";

import { loginAction } from "../actions/auth";
import { LoginState } from "../actions/auth";
import { useActionState } from "react";

const initialState: LoginState = {
  success: false,
  message: null,
  errors: {},
};
export default function LoginPage() {
  const [state, formAction] = useActionState<LoginState>(
    loginAction,
    initialState
  );
  return (
    <form action={formAction} className="p-4 border border-neutral-200 rounded">
      <h3 className="!text-neutral-900">Welcome back</h3>
      <p className="!text-neutral-700 mb-16">Log in to your account</p>
      <div className="flex flex-col gap-4">
        <TextInput label="Email" name="email" />
        <TextInput label="Password" name="password" />
        <div className="flex justify-between">
          <div>
            <input
              type="checkbox"
              id="rememberme"
              className="checkbox rounded checkbox-primary checkbox-sm mr-2"
            />
            <label htmlFor="rememberme">Remember me</label>
          </div>
          <Link className="text-primary" href={""}>
            Forgot password?
          </Link>
        </div>
        <button className="btn btn-primary w-full mb-16">Continue</button>
      </div>

      <div>
        Don't have an account?
        <Link href={""} className="text-primary">
          Sign up
        </Link>
      </div>
    </form>
  );
}
