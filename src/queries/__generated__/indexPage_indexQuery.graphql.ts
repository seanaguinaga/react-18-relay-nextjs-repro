/**
 * @generated SignedSource<<cf32befd3977217083d8cf16955b4186>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type indexPage_indexQuery$variables = {};
export type indexPage_indexQueryVariables = indexPage_indexQuery$variables;
export type indexPage_indexQuery$data = {
  readonly block: ReadonlyArray<{
    readonly id: any;
    readonly value: string;
  }>;
};
export type indexPage_indexQueryResponse = indexPage_indexQuery$data;
export type indexPage_indexQuery = {
  variables: indexPage_indexQueryVariables;
  response: indexPage_indexQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "block",
    "kind": "LinkedField",
    "name": "block",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "value",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "indexPage_indexQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "indexPage_indexQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "4eec35025955f1cbf516ec285927333e",
    "id": null,
    "metadata": {},
    "name": "indexPage_indexQuery",
    "operationKind": "query",
    "text": "query indexPage_indexQuery {\n  block {\n    id\n    value\n  }\n}\n"
  }
};
})();

(node as any).hash = "7d88dcbfb84b5f4586a1bd362580b382";

export default node;
