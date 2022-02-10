import Link from "next/link";
import React from "react";

export default function Landing() {
  return (
    <div>
      <Link href="/home" passHref>
        <ion-item>Home</ion-item>
      </Link>
      <Link href="/authentication" passHref>
        <ion-item>Authentication</ion-item>
      </Link>
    </div>
  );
}
