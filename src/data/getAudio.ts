import audioDataStore from "./audioDataStore.json" assert { type: "json" };

export const getAudio = (slug: string) => {
  const url = (audioDataStore as Record<string, string>)[slug];

  if (!url) {
    return null;
  }

  return url;
};
