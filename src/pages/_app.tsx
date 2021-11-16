import type { AppProps } from "next/app";
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
