export function homeFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "intro_text",
      label: "intro_text",
      ui: {
        component: "textarea",
      },
    },
  ];
}
export function sectionsFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "permalink",
      label: "permalink",
    },
    {
      type: "number",
      name: "section",
      label: "section",
    },
    {
      type: "string",
      name: "intro_section",
      label: "intro_section",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
  ];
}
