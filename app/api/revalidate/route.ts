// app/api/revalidate/route.ts
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { path } = await req.json();

  if (!path) {
    return NextResponse.json({ message: "Missing post ID" }, { status: 400 });
  }

  try {
    revalidatePath(path);
    return NextResponse.json({ revalidated: true });
  } catch {
    return NextResponse.json({ message: "Revalidation failed" }, { status: 500 });
  }
}