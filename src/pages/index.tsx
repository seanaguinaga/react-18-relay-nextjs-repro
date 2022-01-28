import { Suspense } from "react";
import { loadQuery, useRelayEnvironment } from "react-relay";
import Blocks from "../components/Blocks";
import indexPage from "../queries/indexPage";
import { indexPage_indexQuery } from "../queries/__generated__/indexPage_indexQuery.graphql";

export default function Home() {
  let preloadedQuery = loadQuery<indexPage_indexQuery>(
    useRelayEnvironment(),
    indexPage,
    {}
  );

  return (
    <Suspense fallback="loading blocks">
      <Blocks queryReference={preloadedQuery} />
    </Suspense>
  );
}
