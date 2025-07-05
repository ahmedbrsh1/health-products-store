"use client";

import TextInput from "../../components/TextInput";

import { loginAction } from "../../actions/auth";
import { LoginState } from "../../actions/auth";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useFormState } from "react-dom";

const initialState: LoginState = {
  success: false,
  message: null,
  errors: {},
};
export default function LoginPage() {
  const [, formAction] = useFormState(loginAction, initialState);
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => router.back()}
        className="fixed h-screen w-screen bg-black/50 z-40"
      ></div>
      <form
        action={formAction}
        className="fixed container max-w-md z-50 p-4 border bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-neutral-200 rounded"
      >
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
          Don&apos;t have an account?
          <Link href={""} className="text-primary">
            Sign up
          </Link>
        </div>
      </form>
    </>
  );
}
