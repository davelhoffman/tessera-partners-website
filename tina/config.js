import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.HEAD || process.env.CF_PAGES_BRANCH || "main",
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
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
        name: "site",
        label: "Site Content",
        path: "content",
        format: "json",
        match: {
          include: "site",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          // ── Navigation ──────────────────────────────────────────────────────
          {
            name: "nav",
            label: "Navigation",
            type: "object",
            fields: [
              {
                name: "brand",
                label: "Brand Name",
                type: "string",
              },
              {
                name: "links",
                label: "Nav Links",
                type: "object",
                list: true,
                ui: { itemProps: (item) => ({ label: item.text }) },
                fields: [
                  { name: "text", label: "Link Text", type: "string" },
                  { name: "href", label: "Link URL", type: "string" },
                ],
              },
              {
                name: "cta",
                label: "CTA Button",
                type: "object",
                fields: [
                  { name: "text", label: "Button Text", type: "string" },
                  { name: "href", label: "Button URL", type: "string" },
                ],
              },
            ],
          },

          // ── Hero ────────────────────────────────────────────────────────────
          {
            name: "hero",
            label: "Hero Section",
            type: "object",
            fields: [
              {
                name: "headline",
                label: "Headline",
                type: "string",
              },
              {
                name: "subheadParagraphs",
                label: "Subhead Paragraphs",
                type: "string",
                list: true,
                ui: { component: "textarea" },
              },
              {
                name: "cta",
                label: "CTA Button",
                type: "object",
                fields: [
                  { name: "text", label: "Button Text", type: "string" },
                  { name: "href", label: "Button URL", type: "string" },
                ],
              },
            ],
          },

          // ── Credibility Strip ────────────────────────────────────────────────
          {
            name: "credibilityStrip",
            label: "Credibility Strip",
            type: "object",
            fields: [
              {
                name: "items",
                label: "Credential Items",
                type: "string",
                list: true,
              },
            ],
          },

          // ── Who I Work With ──────────────────────────────────────────────────
          {
            name: "whoIWorkWith",
            label: "Who I Work With",
            type: "object",
            fields: [
              { name: "sectionLabel", label: "Section Label", type: "string" },
              { name: "headline", label: "Headline", type: "string" },
              {
                name: "bodyParagraphs",
                label: "Body Paragraphs",
                type: "string",
                list: true,
                ui: { component: "textarea" },
              },
              {
                name: "cards",
                label: "Scenario Cards",
                type: "object",
                list: true,
                ui: { itemProps: (item) => ({ label: item.title }) },
                fields: [
                  { name: "title", label: "Card Title", type: "string" },
                  {
                    name: "body",
                    label: "Card Body",
                    type: "string",
                    ui: { component: "textarea" },
                  },
                ],
              },
              {
                name: "closingParagraphs",
                label: "Closing Paragraphs",
                type: "string",
                list: true,
              },
            ],
          },

          // ── Services ─────────────────────────────────────────────────────────
          {
            name: "services",
            label: "Services",
            type: "object",
            fields: [
              { name: "sectionLabel", label: "Section Label", type: "string" },
              { name: "headline", label: "Headline", type: "string" },
              {
                name: "cards",
                label: "Service Cards",
                type: "object",
                list: true,
                ui: { itemProps: (item) => ({ label: item.title }) },
                fields: [
                  { name: "title", label: "Card Title", type: "string" },
                  {
                    name: "body",
                    label: "Card Body",
                    type: "string",
                    ui: { component: "textarea" },
                  },
                ],
              },
            ],
          },

          // ── PMOS ─────────────────────────────────────────────────────────────
          {
            name: "pmos",
            label: "PMOS Section",
            type: "object",
            fields: [
              { name: "sectionLabel", label: "Section Label", type: "string" },
              { name: "headline", label: "Headline", type: "string" },
              { name: "pullQuote", label: "Pull Quote", type: "string" },
              {
                name: "bodyParagraphs",
                label: "Body Paragraphs",
                type: "string",
                list: true,
                ui: { component: "textarea" },
              },
            ],
          },

          // ── Approach ─────────────────────────────────────────────────────────
          {
            name: "approach",
            label: "Approach",
            type: "object",
            fields: [
              { name: "sectionLabel", label: "Section Label", type: "string" },
              {
                name: "headline",
                label: "Headline",
                type: "string",
                ui: { component: "textarea" },
              },
              {
                name: "steps",
                label: "Steps",
                type: "object",
                list: true,
                ui: { itemProps: (item) => ({ label: item.title }) },
                fields: [
                  { name: "title", label: "Step Title", type: "string" },
                  {
                    name: "body",
                    label: "Step Body",
                    type: "string",
                    ui: { component: "textarea" },
                  },
                ],
              },
              {
                name: "closing",
                label: "Closing Text",
                type: "string",
                ui: { component: "textarea" },
              },
              {
                name: "cta",
                label: "CTA Button",
                type: "object",
                fields: [
                  { name: "text", label: "Button Text", type: "string" },
                  { name: "href", label: "Button URL", type: "string" },
                ],
              },
            ],
          },

          // ── About ─────────────────────────────────────────────────────────────
          {
            name: "about",
            label: "About",
            type: "object",
            fields: [
              { name: "sectionLabel", label: "Section Label", type: "string" },
              { name: "headline", label: "Headline", type: "string" },
              {
                name: "bodyParagraphs",
                label: "Body Paragraphs",
                type: "string",
                list: true,
                ui: { component: "textarea" },
              },
              {
                name: "ctas",
                label: "CTA Buttons",
                type: "object",
                list: true,
                ui: { itemProps: (item) => ({ label: item.text }) },
                fields: [
                  { name: "text", label: "Button Text", type: "string" },
                  { name: "href", label: "Button URL", type: "string" },
                ],
              },
            ],
          },

          // ── Contact ───────────────────────────────────────────────────────────
          {
            name: "contact",
            label: "Contact",
            type: "object",
            fields: [
              { name: "sectionLabel", label: "Section Label", type: "string" },
              { name: "headline", label: "Headline", type: "string" },
              {
                name: "body",
                label: "Body Text",
                type: "string",
                ui: { component: "textarea" },
              },
              {
                name: "cta",
                label: "CTA Button",
                type: "object",
                fields: [
                  { name: "text", label: "Button Text", type: "string" },
                  { name: "href", label: "Button URL", type: "string" },
                ],
              },
              {
                name: "details",
                label: "Contact Details",
                type: "object",
                list: true,
                ui: { itemProps: (item) => ({ label: item.text }) },
                fields: [
                  { name: "text", label: "Display Text", type: "string" },
                  { name: "href", label: "Link URL", type: "string" },
                ],
              },
            ],
          },

          // ── Footer ────────────────────────────────────────────────────────────
          {
            name: "footer",
            label: "Footer",
            type: "object",
            fields: [
              { name: "brand", label: "Brand Name", type: "string" },
              {
                name: "contactItems",
                label: "Contact Items",
                type: "object",
                list: true,
                ui: { itemProps: (item) => ({ label: item.text }) },
                fields: [
                  { name: "text", label: "Display Text", type: "string" },
                  { name: "href", label: "Link URL", type: "string" },
                ],
              },
              { name: "copyright", label: "Copyright Text", type: "string" },
            ],
          },
        ],
      },
    ],
  },
});
