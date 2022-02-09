import React from "react";
import { useLazyLoadQuery } from "react-relay";
import indexPage from "../queries/indexPage";
import { indexPage_indexQuery } from "../queries/__generated__/indexPage_indexQuery.graphql";

interface BlocksProps {}

const Blocks: React.FC<BlocksProps> = () => {
  const data = useLazyLoadQuery<indexPage_indexQuery>(indexPage, {});

  return (
    <ion-list>
      <ion-list-header>Blocks</ion-list-header>
      {data?.block.map((block) => (
        <ion-item key={block.id}>{block.value}</ion-item>
      ))}
    </ion-list>
  );
};

export default Blocks;
