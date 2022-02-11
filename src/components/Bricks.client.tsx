import React, { Suspense } from "react";
import { useLazyLoadQuery } from "react-relay";
import indexPage from "../queries/indexPage";
import { indexPage_indexQuery } from "../queries/__generated__/indexPage_indexQuery.graphql";
import BrickValueItem from "./BrickValueItem.client";

// interface BricksListProps {}

// const BricksList: React.FC<BricksListProps> = ({ brick }) => {
//   const { data, loadNext } = usePaginationFragment<
//     BricksListPaginationQuery,
//     _
//   >(
//     graphql`
//       fragment FriendsListComponent_brick on node
//       @refetchable(queryName: "BricksListPaginationQuery") {
//         brick(limit: 1, where: { int_id: { _gt: 0 } }) {
//           id
//           int_id
//           name
//           updated_at
//           value
//           created_at
//         }
//       }
//     `,
//     brick
//   );
//   return (
//     <>
//       {data?.brick.map((brick) => (
//         <BrickValueItem key={brick.id} brick={brick} />
//       ))}
//     </>
//   );
// };

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
