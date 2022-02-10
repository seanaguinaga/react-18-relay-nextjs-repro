import { graphql } from "react-relay";

export default graphql`
  query indexPage_indexQuery {
    brick {
      id
      int_id
      created_at
      updated_at
      name
      ...BrickValueItem_brick
    }
  }
`;
