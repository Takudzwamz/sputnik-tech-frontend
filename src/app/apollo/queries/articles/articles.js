import gql from "graphql-tag";
const ARTICLES_QUERY = gql`
  query Articles {
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
`;
export default ARTICLES_QUERY;
