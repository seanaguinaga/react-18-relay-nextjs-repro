import React from "react";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import indexPage from "../queries/indexPage";
import { indexPage_indexQuery } from "../queries/__generated__/indexPage_indexQuery.graphql";

interface BlocksProps {
  queryReference: PreloadedQuery<indexPage_indexQuery>;
}

const Blocks: React.FC<BlocksProps> = ({ queryReference }) => {
  const data = usePreloadedQuery<indexPage_indexQuery>(
    indexPage,
    queryReference
  );

  return (
    <ion-list>
      <ion-list-header>Blocks</ion-list-header>
      {data.block.map((block) => (
        <ion-item key={block.id}>{block.value}</ion-item>
      ))}
    </ion-list>
  );
};

export default Blocks;
