import { NextRequest, NextResponse } from "next/server";
import { getProductsByIds } from "../../../../lib/db/products"; // Your DB query function

export async function POST(req: NextRequest) {
  try {
    const ids: string[] = await req.json();

    if (!Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json(
        { error: "Invalid parameters" },
        { status: 400 }
      );
    }

    const products = await getProductsByIds(ids);

    if (products.length === 0) {
      return NextResponse.json({ error: "No products found" }, { status: 404 });
    }

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
