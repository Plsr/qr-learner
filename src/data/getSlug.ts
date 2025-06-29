import codeSlugStore from "./codeSlugStore.json" assert { type: "json" };

export const getSlug = (id: string) => {
  const slug = (codeSlugStore as Record<string, string>)[id];

  if (!slug) {
    return null;
  }

  return slug;
};
