import { useCallback, useTransition } from "react";
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

  const [isPending, startTransition] = useTransition();

  let handleRefetch = useCallback(() => {
    startTransition(() => {
      refetch({});
    });
  }, []);

  return (
    <ion-item color={isPending ? "primary" : undefined} onClick={handleRefetch}>
      {data.value}
    </ion-item>
  );
};

export default BrickValueItem;
