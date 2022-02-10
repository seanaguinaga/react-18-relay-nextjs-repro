import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <Link href="/home" passHref>
        <ion-item>Home</ion-item>
      </Link>
      <Link href="/authentication" passHref>
        <ion-item>authentication</ion-item>
      </Link>
    </div>
  );
}
