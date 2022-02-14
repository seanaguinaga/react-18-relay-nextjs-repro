import React, { Suspense } from "react";
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
      {data?.brick_connection.edges.map((brick) => (
        <Suspense
          key={brick.node.id}
          fallback={
            <ion-item>
              <ion-skeleton-text />
            </ion-item>
          }
        >
          <BrickValueItem brick={brick.node} />
        </Suspense>
      ))}
    </ion-list>
  );
};

export default Bricks;
