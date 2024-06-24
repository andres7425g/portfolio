/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "app/styles/variables.scss";`,
  },
};

export default nextConfig;
