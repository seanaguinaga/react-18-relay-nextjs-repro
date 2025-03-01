import { useAuthUser, withAuthUser } from "next-firebase-auth";
import Link from "next/link";
import React, { Suspense } from "react";
import { loadQuery } from "react-relay";
import Blocks from "../components/Blocks.client";
import indexPage from "../queries/indexPage";
import { indexPage_indexQuery } from "../queries/__generated__/indexPage_indexQuery.graphql";
import { useEnvironment } from "../relay";

const Home = () => {
  let AuthUser = useAuthUser();

  console.log(AuthUser);

  let environment = useEnvironment(null);

  let preloadedQuery = loadQuery<indexPage_indexQuery>(
    environment,
    indexPage,
    {}
  );

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
};

export default withAuthUser()(Home);
