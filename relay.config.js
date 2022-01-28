require("relay-runtime").RelayFeatureFlags.ENABLE_REQUIRED_DIRECTIVES = true;

module.exports = {
  src: "./src",
  schema: "./schema.graphql",
  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
  language: "typescript",
  noFutureProofEnums: true,
};
