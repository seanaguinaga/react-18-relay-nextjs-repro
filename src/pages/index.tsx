import dynamic from "next/dynamic";
import Link from "next/link";
import { Suspense } from "react";
import { loadQuery, useRelayEnvironment } from "react-relay";
import indexPage from "../queries/indexPage";
import type { indexPage_indexQuery } from "../queries/__generated__/indexPage_indexQuery.graphql";

let Blocks = dynamic(() => import("../components/Blocks.client"), {
  suspense: true,
});

export default function Home() {
  let environment = useRelayEnvironment();

  let preloadedQuery = loadQuery<indexPage_indexQuery>(
    environment,
    indexPage,
    {}
  );

  return (
    <>
      <Link href="rsc" passHref>
        <a>RSC</a>
      </Link>
      <Suspense fallback="loading blocks">
        <Blocks queryReference={preloadedQuery} />
      </Suspense>
    </>
  );
}
