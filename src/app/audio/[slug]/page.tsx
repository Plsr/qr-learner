export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const audioSrc = getAudioSrc(slug);

  return (
    <div>
      <h1>Audio Page</h1>
      <p>This is the audio page for {slug}</p>
      <audio controls>
        <source src={audioSrc} type="audio/mp3" />
        Your browser does not support this
      </audio>
    </div>
  );
}

const getAudioSrc = (slug: string) => {
  if (!slug) {
    throw new Error();
  }

  return "/bord.mp3";
};
