import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "box-1": `5px 5px 20px 0 rgba(0,0,0,0.15)`,
      },
    },
  },
} satisfies Config;
