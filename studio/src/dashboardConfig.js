export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6386081ec3b6770740735818",
                  title: "Sanity Studio",
                  name: "regimbald-sanity-studio",
                  apiId: "8c8ca58b-6749-48b1-a967-e2f8b04c8e2a",
                },
                {
                  buildHookId: "6386081ea6c7660784510259",
                  title: "Blog Website",
                  name: "regimbald-sanity",
                  apiId: "438add3b-91af-42f9-96c0-1d5408346b84",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/guibulator/regimbald-sanity",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://regimbald-sanity.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
