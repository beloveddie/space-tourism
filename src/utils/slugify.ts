export const slugify = (text: string) => {
  return text.replace(" ", "-").toLowerCase();
};
