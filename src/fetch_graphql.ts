import { RequestParameters } from "relay-runtime";

export async function fetchGraphQL(req: RequestParameters, variables: unknown) {
  const response = await fetch("http://localhost:5000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: req.text,
      variables,
    }),
  });

  return await response.json();
}
