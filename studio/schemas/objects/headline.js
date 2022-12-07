export default {
  name: "headline",
  title: "Headline",
  type: "object",
  localize: true,
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "body", title: "Body", type: "excerptPortableText" },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      console.log(arguments);
      return {
        title: "Headline: " + title,
      };
    },
  },
};
