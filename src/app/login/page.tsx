"use client";

import TextInput from "../components/TextInput";
import Link from "next/link";
import { loginAction } from "../actions/auth";
import { LoginState } from "../actions/auth";

import { useActionState } from "react";
import Image from "next/image";
import loginImage from "../../../public/images/2/2.jpg";
const initialState: LoginState = {
  success: false,
  message: null,
  errors: {},
};
export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(
    loginAction,
    initialState
  );

  return (
    <div className="container h-full mx-auto flex  gap-4">
      <div className="hidden md:flex max-w-1/2  justify-center items-center">
        <Image
          src={loginImage}
          alt="Login image"
          className="max-w-1/2 rounded-full object-cover"
        />
      </div>
      <form
        action={formAction}
        className="p-4 border border-neutral-200 rounded grow"
      >
        <h3 className="!text-neutral-900 !font-bold">Welcome back</h3>
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
            <Link className="text-primary" href={"/reset"}>
              Forgot password?
            </Link>
          </div>
          {state.success === false && state.message && (
            <div role="alert" className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{state.message}</span>
            </div>
          )}
          <button disabled={isPending} className="btn btn-primary w-full mb-16">
            {isPending ? "Logging in..." : "Continue"}
          </button>
        </div>

        <div>
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-primary">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
