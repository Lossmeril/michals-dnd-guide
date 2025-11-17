import { NextResponse } from "next/server";
import { PREVIEWS } from "@/data/previews";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json(
      { error: "Missing slug parameter" },
      { status: 400 }
    );
  }

  const preview = PREVIEWS.find((p) => p.slug === slug);

  if (!preview) {
    return NextResponse.json({ error: "Preview not found" }, { status: 404 });
  }

  return NextResponse.json(preview, { status: 200 });
}
