import Link from "next/link";
import React, { Suspense } from "react";
import { loadQuery } from "react-relay";
import Blocks from "../components/Blocks.client";
import indexPage from "../queries/indexPage";
import { indexPage_indexQuery } from "../queries/__generated__/indexPage_indexQuery.graphql";
import { initEnvironment } from "../relay";

let environment = initEnvironment();

let preloadedQuery = loadQuery<indexPage_indexQuery>(
  environment,
  indexPage,
  {}
);
export default function Home() {
  return (
    <div>
      <Link href="/rsc" passHref>
        <ion-item>RSC</ion-item>
      </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Blocks queryReference={preloadedQuery} />
      </Suspense>
    </div>
  );
}
