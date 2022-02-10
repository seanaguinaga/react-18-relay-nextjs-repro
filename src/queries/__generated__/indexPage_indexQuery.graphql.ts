/**
 * @generated SignedSource<<e7bd071c8abfca4da9a2c849cddda956>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type indexPage_indexQuery$variables = {};
export type indexPage_indexQuery$data = {
  readonly brick: ReadonlyArray<{
    readonly id: any;
    readonly int_id: number;
    readonly created_at: any;
    readonly updated_at: any;
    readonly name: string;
    readonly " $fragmentSpreads": FragmentRefs<"BrickValueItem_brick">;
  }>;
};
export type indexPage_indexQuery = {
  variables: indexPage_indexQuery$variables;
  response: indexPage_indexQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "int_id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created_at",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updated_at",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "indexPage_indexQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "brick",
        "kind": "LinkedField",
        "name": "brick",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "indexPage_indexQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "brick",
        "kind": "LinkedField",
        "name": "brick",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "da2433d6c6469bb41cd548e75a2a7a8f",
    "id": null,
    "metadata": {},
    "name": "indexPage_indexQuery",
    "operationKind": "query",
    "text": "query indexPage_indexQuery {\n  brick {\n    id\n    int_id\n    created_at\n    updated_at\n    name\n    ...BrickValueItem_brick\n  }\n}\n\nfragment BrickValueItem_brick on brick {\n  value\n}\n"
  }
};
})();

(node as any).hash = "5f9b94980a38b42137d8201ccef4eba6";

export default node;
