const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true, // Add this to disable Next.js image optimization
    remotePatterns: [
      { protocol: "https", hostname: "i.pravatar.cc" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "github.com" },
    ],
  },
};

module.exports = nextConfig;
