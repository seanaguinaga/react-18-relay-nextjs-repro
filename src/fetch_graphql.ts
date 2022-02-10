import { RequestParameters } from "relay-runtime";

export async function fetchGraphQL(
  text: RequestParameters["text"],
  variables: unknown,
  token?: string | null
) {
  const response = await fetch(
    "https://amused-bluejay-15.hasura.app/v1beta1/relay",
    {
      method: "POST",
      headers: token
        ? {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        : {
            Accept: "application/json",
            "x-hasura-role": "anonymous",
            "Content-Type": "application/json",
          },

      body: JSON.stringify({
        query: text,
        variables,
      }),
    }
  );

  return await response.json();
}
