import { withAuthUserTokenSSR } from "next-firebase-auth";
import Link from "next/link";
import React, { Suspense } from "react";
import { fetchQuery } from "react-relay";
import Blocks from "../components/Blocks.client";
import indexPage from "../queries/indexPage";
import { initEnvironment } from "../relay";

export default function Home() {
  return (
    <div>
      <Link href="/rsc" passHref>
        <ion-item>RSC</ion-item>
      </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Blocks />
      </Suspense>
    </div>
  );
}

export const getServerSideProps = withAuthUserTokenSSR()(async (ctx) => {
  let test = false;
  if (test) {
    const environment = initEnvironment(undefined, ctx);
    await fetchQuery(environment, indexPage, {}).toPromise();
    const initialRecords = environment.getStore().getSource().toJSON();
    return {
      props: {
        initialRecords,
      },
    };
  }
  return {
    props: {},
  };
});
