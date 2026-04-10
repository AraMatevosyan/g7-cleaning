import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...nextCoreWebVitals,
  {
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
  {
    ignores: ["public/assets/vendors/**", "src/views/legacy/**"],
  },
];

export default config;
