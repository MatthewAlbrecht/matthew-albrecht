const withMDXFn = require("@next/mdx");

const withMDX = withMDXFn();

/** @type {import("next").NextConfig} */
const config = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  experimental: {
    typedRoutes: true,
  },
};

module.exports = withMDX(config);
