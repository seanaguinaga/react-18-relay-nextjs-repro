import React, { Suspense } from "react";
import { loadQuery } from "react-relay";
import Blocks from "../components/Blocks.client";
import indexPage from "../queries/indexPage";
import { indexPage_indexQuery } from "../queries/__generated__/indexPage_indexQuery.graphql";
import { createRelayClientEnvironment } from "../relay_client_environment";
import { env } from "./_app";

let environment = env || createRelayClientEnvironment();

let preloadedQuery = loadQuery<indexPage_indexQuery>(
  environment,
  indexPage,
  {}
);
export default function Home() {
  return (
    <div>
      <h1>RSC</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Blocks queryReference={preloadedQuery} />
      </Suspense>
    </div>
  );
}
