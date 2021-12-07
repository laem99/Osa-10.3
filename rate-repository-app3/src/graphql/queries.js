import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query(
    $after: String
    $first: Int
    $orderDirection: OrderDirection
    $orderBy: AllRepositoriesOrderBy
    $ownerName: String) {
    repositories(
      after: $after
      first: $first
      orderDirection: $orderDirection
      orderBy: $orderBy
      ownerName: $ownerName
    ) {
      edges {
        node {
          createdAt,
          description,
          forksCount,
          fullName,
          id,
          language,
          name,
          ownerAvatarUrl,
          ownerName,
          ratingAverage,
          reviewCount,
          stargazersCount,
        }
        cursor,
      }
      pageInfo {
        endCursor
        startCursor
        hasPreviousPage
        hasNextPage
      }
    }
  }
`;

export const AUTHORIZED_USER = gql`
      query($includeReviews: Boolean = false) {
        authorizedUser {
          id
          username
          reviews @include(if: $includeReviews) {
            edges {
              node {
                user {
                  username
                  id
                }
                id
                text
                rating
                repository {
                  name
                  ownerName
                  id
                }
                createdAt
              }
              cursor
            }
            pageInfo {
              endCursor
              startCursor
              hasNextPage
            }
          }
        }
      }
`;

export const GET_REPOSITORY = gql`
  query repository($id: ID!) {
    repository(id: $id) {
      fullName,
      name,
      id,
      ownerName,
      name,
      createdAt,
      ratingAverage,
      reviewCount,
      stargazersCount,
      watchersCount,
      forksCount,
      openIssuesCount,
      url,
      ownerAvatarUrl,
      description,
      language,
    }
  }
`;

export const GET_REPO_REVIEWS = gql`
  query(
    $id: ID!
    $first: Int
    $after: String
    ) {
    repository(id: $id) {
      fullName,
      id,
      reviews(first: $first, after: $after) {
        totalCount,
        edges {
          node {
            id,
            text,
            rating,
            createdAt,
            repositoryId,
            user {
              id,
              username,
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      },
    }
  }
`;