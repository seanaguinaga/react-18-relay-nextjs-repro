import Link from "next/link";
import { Suspense } from "react";
import { loadQuery, useRelayEnvironment } from "react-relay";
import Blocks from "../components/Blocks";
import indexPage from "../queries/indexPage";
import { indexPage_indexQuery } from "../queries/__generated__/indexPage_indexQuery.graphql";

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
        <ion-item>RSC</ion-item>
      </Link>
      <Suspense fallback="loading blocks">
        <Blocks queryReference={preloadedQuery} />
      </Suspense>
    </>
  );
}
