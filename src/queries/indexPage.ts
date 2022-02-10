import { graphql } from "react-relay";

export default graphql`
  query indexPage_indexQuery {
    brick_connection {
      edges {
        node {
          created_at
          id
          int_id
          name
          updated_at
          ...BrickValueItem_brick
        }
      }
    }
  }
`;
