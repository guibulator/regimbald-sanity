export default {
  name: "author",
  type: "document",
  title: "Author",
  preview: {
    localize: false,
    select: {
      title: "name",
    },
  },
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "Some frontends will require a slug to be set to be able to show the person",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "image",
      type: "mainImage",
      title: "Image",
    },
    {
      name: "bio",
      type: "bioPortableText",
      title: "Biography",
      localize: true,
    },
  ],
};
