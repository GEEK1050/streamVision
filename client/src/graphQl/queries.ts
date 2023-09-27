import gql from "graphql-tag";

export const GET_LATEST_ALL = gql`
  query getLatestAll {
    getLatestAll {
      id
      title
      thumbnail
    }
  }
`;

export const GET_LATEST_MOVIES_BY_CATEGORY = gql`
  query getLatestMoviesByCategory($category: String!, $size: Int!) {
    getLatestMoviesByCategory(category: $category, size: $size) {
      id
      title
      thumbnail
    }
  }
`;
