/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "http",
            hostname: "localhost",
            port: "1337",
            pathname: "/uploads/**",
         },
         {
            protocol: "http",
            hostname: "localhost",
            port: "1338",
            pathname: "/uploads/**",
         },
         {
            protocol: "https",
            hostname: "admin.infirmiere68000.fr",
            pathname: "/wp-content/uploads/**",
         },
      ],
   },
};

export default nextConfig;
