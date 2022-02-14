import {
  AuthAction,
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from "next-firebase-auth";
import Link from "next/link";
import React, { Suspense } from "react";
import { loadQuery } from "react-relay";
import Blocks from "../components/Blocks.client";
import indexPage from "../queries/indexPage";
import { indexPage_indexQuery } from "../queries/__generated__/indexPage_indexQuery.graphql";
import { useEnvironment } from "../relay";

const Home = () => {
  let AuthUser = useAuthUser();

  console.log(AuthUser.claims);

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
      <ion-item onClick={() => AuthUser.signOut()}>Sign Out</ion-item>
      <Suspense fallback={<div>Loading...</div>}>
        <Blocks queryReference={preloadedQuery} />
      </Suspense>
    </div>
  );
};

export const getServerSideProps = withAuthUserTokenSSR()(async () => {
  return { props: {} };
});

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(Home);
