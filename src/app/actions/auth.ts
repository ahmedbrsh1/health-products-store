"use server";

import { loginUser, registerUser } from "../../../lib/db/users";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type LoginState = {
  success: boolean;
  message: string | null;
  errors?: {
    email?: string;
    password?: string;
  };
};

export async function registerAction(formData: FormData) {
  const registerData = {
    fname: formData.get("fname")?.toString(),
    lname: formData.get("lname")?.toString(),
    email: formData.get("email")?.toString(),
    password: formData.get("password")?.toString(),
  };

  if (
    !registerData.fname ||
    !registerData.lname ||
    !registerData.email ||
    !registerData.password
  ) {
    return;
  }

  const id = await registerUser(
    registerData.fname,
    registerData.lname,
    registerData.email,
    registerData.password
  );

  // create JWT token and store in cookie
  const token = jwt.sign({ userId: id }, process.env.JWT_SECRET!, {
    expiresIn: "1d",
  });

  (await cookies()).set("token", token, {
    httpOnly: true,
    maxAge: 60 * 60 * 24,
    path: "/",
  });
}

export async function loginAction(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return { success: false, message: "Missing credentials" };
  }

  const result = await loginUser(email, password);

  if (!result) {
    return { success: false, message: "Invalid email or password" };
  }

  const { token } = result;

  (await cookies()).set("token", token, {
    httpOnly: true,
    maxAge: 60 * 60 * 24,
    path: "/",
  });

  redirect("../");
}
