/**
 * @generated SignedSource<<78da3c52d881edf59f1875324c4b52b1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BrickValueItem_brick$data = {
  readonly value: string;
  readonly " $fragmentType": "BrickValueItem_brick";
};
export type BrickValueItem_brick$key = {
  readonly " $data"?: BrickValueItem_brick$data;
  readonly " $fragmentSpreads": FragmentRefs<"BrickValueItem_brick">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BrickValueItem_brick",
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
};

(node as any).hash = "25099012f8a4ecaa9517f224fbf2e13e";

export default node;
