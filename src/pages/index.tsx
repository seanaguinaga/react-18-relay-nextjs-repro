import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Suspense } from "react";
import { loadQuery } from "react-relay";
import indexPage from "../queries/indexPage";
import type { indexPage_indexQuery } from "../queries/__generated__/indexPage_indexQuery.graphql";
import { env } from "./_app";

let Blocks = dynamic(() => import("../components/Blocks"), { suspense: true });

let environment = env;

let preloadedQuery = loadQuery<indexPage_indexQuery>(
  environment,
  indexPage,
  {}
);
export default function Home() {
  return (
    <>
      <Link href="/rsc" passHref>
        <ion-item>RSC</ion-item>
      </Link>
      <Suspense fallback="loading blocks">
        <Blocks queryReference={preloadedQuery} />
      </Suspense>
    </>
  );
}
