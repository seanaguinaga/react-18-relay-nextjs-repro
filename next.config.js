module.exports = {
  swcMinify: true,
  swcLoader: true,
  experimental: {
    reactRoot: true,
    runtime: "nodejs",
    concurrentFeatures: true,
    serverComponents: true,
  },
};
