import gql from "graphql-tag";
const ARTICLE_QUERY = gql`
  query Articles($id: ID!) {
    article(id: $id) {
      id
      title
      content
      link
      source
      category {
        id
        name
      }
      image {
        url
      }
      
      image1 {
        url
      }
      image2 {
        url
      }
      image3 {
        url
      }
      image4 {
        url
      }
      image5 {
        url
      }
      
    }
  }
`;
export default ARTICLE_QUERY;
