"use client";

import { LoginState } from "@/app/actions/auth";

import { useActionState } from "react";

import { loginAction } from "@/app/actions/auth";
import TextInput from "@/app/components/TextInput";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
          <Link
            href="/register"
            onClick={(e) => {
              e.preventDefault();
              router.back();
              // Small delay to allow the back navigation to complete
              setTimeout(() => {
                router.push("/register");
              }, 100);
            }}
            className="text-primary"
          >
            Sign up
          </Link>
        </div>
      </form>
    </>
  );
}
