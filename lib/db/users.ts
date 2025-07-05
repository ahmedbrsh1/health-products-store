import connect from "../db/connect";
import User from "../../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function registerUser(
  fname: string,
  lname: string,
  email: string,
  password: string
) {
  await connect();
  const hashed = await bcrypt.hash(password, 10);
  const newUser = new User({ fname, lname, email, password: hashed });
  const saved = await newUser.save();
  return saved._id;
}

export async function loginUser(email: string, password: string) {
  await connect();
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return;
  }
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
    expiresIn: "1d",
  });
  return { token };
}

export async function getUserById(userId: string) {
  await connect();
  const user = await User.findById(userId).select("-password");
  return user;
}
