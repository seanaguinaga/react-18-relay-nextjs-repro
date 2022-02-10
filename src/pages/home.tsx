import { useAuthUser, withAuthUser } from "next-firebase-auth";
import Link from "next/link";
import React, { Suspense } from "react";
import { loadQuery } from "react-relay";
import Blocks from "../components/Blocks.client";
import indexPage from "../queries/indexPage";
import { indexPage_indexQuery } from "../queries/__generated__/indexPage_indexQuery.graphql";
import { initEnvironment } from "../relay";

let environment = initEnvironment();

console.log({ test: window?.location });

let preloadedQuery = loadQuery<indexPage_indexQuery>(
  environment,
  indexPage,
  {}
);

function Home() {
  let test = fetch("http://localhost:3000/api/user").then((res) =>
    res.json().then((data) => console.log)
  );

  console.log({ test });
  let AuthUser = useAuthUser();
  return (
    <div>
      <h1>{AuthUser.displayName || "Loading"}</h1>
      <Link href="/rsc" passHref>
        <ion-item>RSC</ion-item>
      </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Blocks queryReference={preloadedQuery} />
      </Suspense>
    </div>
  );
}

export default withAuthUser()(Home);
