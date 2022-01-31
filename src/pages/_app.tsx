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
import type { AppProps } from "next/app";
import React from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { createRelayClientEnvironment } from "../relay_client_environment";
import { createRelayServerEnvironment } from "../relay_server_environment";

const env =
  typeof window === "undefined"
    ? createRelayServerEnvironment()
    : createRelayClientEnvironment();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RelayEnvironmentProvider environment={env}>
      <Component {...pageProps} />
    </RelayEnvironmentProvider>
  );
}

export default MyApp;
