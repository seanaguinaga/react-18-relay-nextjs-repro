import { RequestParameters } from "relay-runtime";

export async function fetchGraphQL(req: RequestParameters, variables: unknown) {
  const response = await fetch(
    "https://amused-bluejay-15.hasura.app/v1/graphql",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "x-haura-role": "anonymous",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: req.text,
        variables,
      }),
    }
  );

  return await response.json();
}
