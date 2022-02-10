import { graphql, useRefetchableFragment } from "react-relay";
import { BrickValueItem_brick$key } from "./__generated__/BrickValueItem_brick.graphql";

interface BrickItemProps {
  brick: BrickValueItem_brick$key;
}

const BrickValueItem: React.FC<BrickItemProps> = ({ brick }) => {
  const [data, refetch] = useRefetchableFragment(
    graphql`
      fragment BrickValueItem_brick on brick
      @refetchable(queryName: "BrickValueItemRefetchQuery") {
        value
      }
    `,
    brick
  );

  return <ion-item>{data.value}</ion-item>;
};

export default BrickValueItem;
