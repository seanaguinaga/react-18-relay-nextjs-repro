import React from "react";
import { useLazyLoadQuery } from "react-relay";
import indexPage from "../queries/indexPage";
import { indexPage_indexQuery } from "../queries/__generated__/indexPage_indexQuery.graphql";
import BrickValueItem from "./BrickValueItem.client";

interface BricksProps {}

const Bricks: React.FC<BricksProps> = () => {
  const data = useLazyLoadQuery<indexPage_indexQuery>(indexPage, {});

  return (
    <ion-list>
      <ion-list-header>Bricks</ion-list-header>
      {data?.brick.map((brick) => (
        <BrickValueItem key={brick.id} brick={brick} />
      ))}
    </ion-list>
  );
};

export default Bricks;
