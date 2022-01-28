import { graphql } from "react-relay";

export default graphql`
  query indexPage_indexQuery {
    block {
      id
      value
    }
  }
`;
