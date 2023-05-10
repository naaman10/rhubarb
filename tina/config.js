import { defineConfig } from "tinacms";
import { homeFields } from "./templates";
import { sectionsFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "5c356d65-fc70-4355-aab0-85415e6650e0", // Get this from tina.io
  token: "64f6189f979266e6d2291ce0a921ccee587c1e1c", // Get this from tina.io
  client: { skip: true },
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
    collections: [],
  },
});
