import { useQuery } from "@apollo/client";
import { GET_REPO_REVIEWS } from "../graphql/queries";

const useReviews = (variables) => {
  variables = { ...variables, first: Number(variables.first) };
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPO_REVIEWS, {
    fetchPolicy: 'cache-and-network',
    variables
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data && data.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: GET_REPO_REVIEWS,
      variables: {
        ...variables,
        after: data.repository.reviews.pageInfo.endCursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          repository: {
            ...fetchMoreResult.repository,
            reviews: {
              ...fetchMoreResult.repository.reviews,
              edges: [
                ...previousResult.repository.reviews.edges,
                ...fetchMoreResult.repository.reviews.edges,
              ],
            },
          },
        };
        return nextResult;
      },
    });
  };

  return {
    reviews: data ? data.repository.reviews : undefined,
    loading,
    fetchMore: handleFetchMore,
    ...result,
  };

};

export default useReviews;