import "@ionic/core/css/core.css";
import "@ionic/core/css/display.css";
import "@ionic/core/css/flex-utils.css";
import "@ionic/core/css/float-elements.css";
import "@ionic/core/css/normalize.css";
import "@ionic/core/css/padding.css";
import "@ionic/core/css/structure.css";
import "@ionic/core/css/text-alignment.css";
import "@ionic/core/css/text-transformation.css";
import "@ionic/core/css/typography.css";
import { defineCustomElements } from "@ionic/core/loader";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import initAuth from "../firebase/initAuth";
import { useEnvironment } from "../relay";

initAuth();

function MyApp({ Component, pageProps }: AppProps) {
  const environment = useEnvironment(pageProps.initialRecords);

  useEffect(() => {
    defineCustomElements(window);
  });

  return (
    <RelayEnvironmentProvider environment={environment}>
      <Component {...pageProps} />
    </RelayEnvironmentProvider>
  );
}

export default MyApp;
