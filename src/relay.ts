import { SSRPropsContext } from "next-firebase-auth";
import { ParsedUrlQuery } from "querystring";
import { useMemo } from "react";
import {
  Environment,
  Network,
  RecordSource,
  RequestParameters,
  Store,
} from "relay-runtime";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";
import { fetchGraphQL } from "./fetch_graphql";

let relayEnvironment: Environment | undefined;

// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchGraphQL utility with params.text.
async function fetchRelay(
  params: RequestParameters,
  variables: unknown,
  ctx?: SSRPropsContext<ParsedUrlQuery>
) {
  console.log(
    `fetching query ${params.name} with ${JSON.stringify(variables)}`
  );
  let token = await ctx?.AuthUser.getIdToken();
  return fetchGraphQL(params.text, variables, token);
}

function createEnvironment(ctx?: SSRPropsContext<ParsedUrlQuery>) {
  return new Environment({
    // Create a network layer from the fetch function
    network: Network.create((params: RequestParameters, variables: unknown) =>
      fetchRelay(params, variables, ctx)
    ),
    store: new Store(new RecordSource()),
    isServer: typeof window === "undefined",
  });
}

export function initEnvironment(
  initialRecords?: RecordMap,
  ctx?: SSRPropsContext<ParsedUrlQuery>
) {
  // Create a network layer from the fetch function
  const environment = relayEnvironment ?? createEnvironment(ctx);

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
