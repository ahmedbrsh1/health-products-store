import connect from "../db/connect";
import User from "../../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function registerUser(
  name: string,
  email: string,
  password: string,
  phone: string,
  address: string
) {
  await connect();
  const hashed = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, password: hashed, phone, address });
  await newUser.save();
  return { message: "User registered" };
}

export async function loginUser(email: string, password: string) {
  await connect();
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid credentials");
  }
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
    expiresIn: "1d",
  });
  return { token };
}
