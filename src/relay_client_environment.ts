import { Environment, Network, RecordSource, Store } from "relay-runtime";
import { fetchGraphQL } from "./fetch_graphql";

export function createRelayClientEnvironment() {
  console.log(
    "createRelayClientEnvironment() called. This is the first time the app is being run."
  );
  return new Environment({
    network: Network.create(fetchGraphQL),
    store: new Store(new RecordSource()),
    isServer: false,
  });
}
