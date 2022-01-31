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
    <ul>
      {data.block.map((block) => (
        <li key={block.id}>{block.value}</li>
      ))}
    </ul>
  );
};

export default Blocks;
