export default {
  name: "hero",
  type: "object",
  title: "Content",
  fields: [
    { name: "title", type: "string", title: "Title" },
    { name: "image", type: "mainImage", title: "Image" },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title: "Hero: " + title,
        media,
        subtitle: "Content",
      };
    },
  },
};
