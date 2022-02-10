/**
 * @generated SignedSource<<eede4215143966b6db00071e8be507f9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BrickValueItem_brick$data = {
  readonly value: string;
  readonly id: string;
  readonly " $fragmentType": "BrickValueItem_brick";
};
export type BrickValueItem_brick$key = {
  readonly " $data"?: BrickValueItem_brick$data;
  readonly " $fragmentSpreads": FragmentRefs<"BrickValueItem_brick">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./BrickValueItemRefetchQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "BrickValueItem_brick",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "value",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "brick",
  "abstractKey": null
};

(node as any).hash = "ee54336c5f180238d96d70205336503e";

export default node;
