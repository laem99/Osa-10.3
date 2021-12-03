import React from 'react';
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

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

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;