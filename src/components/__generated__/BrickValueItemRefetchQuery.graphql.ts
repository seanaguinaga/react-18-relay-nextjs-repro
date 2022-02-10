/**
 * @generated SignedSource<<e5ae83dd252f9e9212e1f246b18ab5b8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BrickValueItemRefetchQuery$variables = {
  id: string;
};
export type BrickValueItemRefetchQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"BrickValueItem_brick">;
  } | null;
};
export type BrickValueItemRefetchQuery = {
  variables: BrickValueItemRefetchQuery$variables;
  response: BrickValueItemRefetchQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BrickValueItemRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "BrickValueItem_brick"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BrickValueItemRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "value",
                "storageKey": null
              }
            ],
            "type": "brick",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "eb1e5fe70534370d2a29299ba09421fa",
    "id": null,
    "metadata": {},
    "name": "BrickValueItemRefetchQuery",
    "operationKind": "query",
    "text": "query BrickValueItemRefetchQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...BrickValueItem_brick\n    id\n  }\n}\n\nfragment BrickValueItem_brick on brick {\n  value\n  id\n}\n"
  }
};
})();

(node as any).hash = "ee54336c5f180238d96d70205336503e";

export default node;
