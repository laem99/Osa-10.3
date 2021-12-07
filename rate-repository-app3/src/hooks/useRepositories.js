import React from 'react';
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { GET_REPOSITORIES } from '../graphql/queries';
import sortBySelectedValues from '../utils/sortBySelectedValues';

const useRepositories = (variables) => {
  const [repositories, setRepositories] = useState();

  const sortByValues = sortBySelectedValues(variables.sortBy);
  variables = {
    ...sortByValues,
    variables
  };

  const { data, error, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    variables: variables.variables,
    fetchPolicy: 'cache-and-network',
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });

    return {
      repositories: data?.repositories,
      fetchMore: handleFetchMore,
      loading,
      ...result,
    };
  };

  const fetchRepositories = async () => {
    if (data) {
      setRepositories(data.repositories);
    }
  };

  useEffect(() => {
    if (data) {
      fetchRepositories();
    }
  }, [data]);

  if (error) {
    return error.message;
  }
  if (loading) {
    return <Text>Loading...</Text>;
  }

  return { fetchMore: handleFetchMore, repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;