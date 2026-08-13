import nextConfig from "eslint-config-next";

const eslintConfig = [
  ...nextConfig,
  {
    ignores: ["src/legacy/**"],
  },
];

export default eslintConfig;
