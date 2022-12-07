export default {
  name: "articleReference",
  type: "object",
  title: "Article reference",
  fields: [
    {
      name: "author",
      type: "reference",
      to: [
        {
          type: "author",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "author.name",
      media: "author.image.asset",
    },
  },
};
