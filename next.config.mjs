/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "js", "tsx", "jsx", "md", "mdx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

// mdx-config.mjs
import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
