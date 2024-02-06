await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    domains: ["aceternity.com"],
  },
  experimental: {
    typedRoutes: true,
  },
  webpack: (config) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    config.externals.push("@node-rs/argon2", "@node-rs/bcrypt");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return config;
  },
};

export default config;
