import gql from "graphql-tag";
const CATEGORY_ARTICLES_QUERY = gql`
  query Category($id: ID!) {
    category(id: $id) {
      id
      name
      articles {
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
  }
`;
export default CATEGORY_ARTICLES_QUERY;
