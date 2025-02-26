const nextConfig = {
  output: "export",
  distDir: "out",  // <-- Add this
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.pravatar.cc" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "github.com" },
    ],
  },
};

module.exports = nextConfig;
