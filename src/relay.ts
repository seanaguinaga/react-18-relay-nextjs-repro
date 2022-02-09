import { useMemo } from "react";
import { Environment, Network, RecordSource, Store } from "relay-runtime";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";
import { fetchGraphQL } from "./fetch_graphql";

let relayEnvironment: Environment | undefined;

function createEnvironment() {
  return new Environment({
    // Create a network layer from the fetch function
    network: Network.create(fetchGraphQL),
    store: new Store(new RecordSource()),
    isServer: typeof window === "undefined",
  });
}

export function initEnvironment(initialRecords?: RecordMap) {
  // Create a network layer from the fetch function
  const environment = relayEnvironment ?? createEnvironment();

  // If your page has Next.js data fetching methods that use Relay, the initial records
  // will get hydrated here
  if (initialRecords) {
    environment.getStore().publish(new RecordSource(initialRecords));
  }

  // Create the Relay environment once in the client
  if (!relayEnvironment) relayEnvironment = environment;

  return relayEnvironment;
}

export function useEnvironment(initialRecords: any) {
  const store = useMemo(
    () => initEnvironment(initialRecords),
    [initialRecords]
  );
  return store;
}
