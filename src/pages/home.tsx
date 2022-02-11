import { withAuthUser } from "next-firebase-auth";
import Link from "next/link";
import React, { Suspense } from "react";
import Bricks from "../components/Bricks.client";
import withRelay from "../components/withRelay";

function Home() {
  return (
    <div>
      <Link href="/rsc" passHref>
        <ion-item>RSC</ion-item>
      </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Bricks />
      </Suspense>
    </div>
  );
}

export default withAuthUser()(withRelay(Home));
