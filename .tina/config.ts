import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "5bd6d654-738e-4794-b32e-01919db1fb86", // Get this from tina.io
  token: "1fdd716882bfdcd0718fb24b586a60d98e4d21d3", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/contents",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true,
          },
          {
            type: "datetime",
            name: "datetime",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "ogImage",
            label: "Image",
            required: false,
           },
           {  
            type: "string",
            name: "tags",
            label: "Tags",
            required: true,
           },
           {
            type: "string",
            name: "background",
            label: "Color",
            required: false,
           },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
