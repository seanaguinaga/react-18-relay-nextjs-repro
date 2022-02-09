module.exports = {
  swcMinify: true,
  swcLoader: true,
  experimental: {
    runtime: "edge",
    reactRoot: true,
    concurrentFeatures: true,
    serverComponents: true,
  },
};
