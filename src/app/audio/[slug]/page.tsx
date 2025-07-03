import { AudioPlayer } from "@/components/audioplayer";
import { getAudio } from "@/data/getAudio";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const audioSrc = getAudio(slug);

  if (!audioSrc) {
    return notFound();
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-purple-200">
      <h1 className="text-3xl mb-8 font-bold">{slug}</h1>
      <AudioPlayer audioSrc={audioSrc} />
    </div>
  );
}
