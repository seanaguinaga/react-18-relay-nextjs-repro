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

export async function getServerSideProps() {
  const environment = initEnvironment();
  await fetchQuery(environment, indexPage, {}).toPromise();
  const initialRecords = environment.getStore().getSource().toJSON();

  return {
    props: {
      initialRecords,
    },
  };
}
