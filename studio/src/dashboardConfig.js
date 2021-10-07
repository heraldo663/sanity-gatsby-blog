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
                    "615f3d44fa9f6c666acf8678",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-omfcby7f",
                  apiId: "8fdeb3f1-1518-43fe-8bd8-7118e0464c8c",
                },
                {
                  buildHookId: "615f3d441190f956dfd21f23",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-8hoqae8y",
                  apiId: "f62f5889-1596-48f1-aa83-73090514622a",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/heraldo663/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-8hoqae8y.netlify.app",
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
