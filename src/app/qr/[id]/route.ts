import { getSlug } from "@/data/getSlug";
import { notFound, redirect } from "next/navigation";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const slug = getSlug(id);

  if (!slug) {
    return notFound();
  }

  return redirect(`/audio/${slug}`);
}
