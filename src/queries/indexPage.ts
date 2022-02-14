import { graphql } from "react-relay";

export default graphql`
  query indexPage_indexQuery {
    brick_connection {
      edges {
        node {
          id
          value
        }
      }
    }
  }
`;
