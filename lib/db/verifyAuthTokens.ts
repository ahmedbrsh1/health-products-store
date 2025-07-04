// lib/verifyAuthToken.ts
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

export function verifyAuthToken(token: string): { userId: string } {
  const decoded = jwt.verify(token, JWT_SECRET);

  // Validate structure
  if (
    typeof decoded === "object" &&
    decoded !== null &&
    "userId" in decoded &&
    typeof decoded.userId === "string"
  ) {
    return { userId: decoded.userId };
  }

  throw new Error("Invalid token payload");
}
