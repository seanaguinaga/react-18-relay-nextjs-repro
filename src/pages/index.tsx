import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Suspense } from "react";
import { loadQuery, useRelayEnvironment } from "react-relay";
import indexPage from "../queries/indexPage";
import type { indexPage_indexQuery } from "../queries/__generated__/indexPage_indexQuery.graphql";

let Blocks = dynamic(() => import("../components/Blocks.client"), {
  suspense: true,
});

export default function Home() {
  let environment = useRelayEnvironment();

  let preloadedQuery = loadQuery<indexPage_indexQuery>(
    environment,
    indexPage,
    {}
  );

  return (
    <ErrorBoundary>
      <Link href="/rsc" passHref>
        <ion-item>RSC</ion-item>
      </Link>
      <Suspense fallback="loading blocks">
        <Blocks queryReference={preloadedQuery} />
      </Suspense>
    </ErrorBoundary>
  );
}

class ErrorBoundary extends React.Component<any, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
