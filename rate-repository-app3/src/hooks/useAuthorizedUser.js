import React from 'react';
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { AUTHORIZED_USER } from '../graphql/queries';

const useAuthorizedUser = () => {
    const [user, setUser] = useState();

    const { data, error, loading } = useQuery(AUTHORIZED_USER, {
        fetchPolicy: 'cache-and-network'
    });

    const getAuthorizedUser = async () => {
        if (data) {
            setUser(data);
        }
    };

    useEffect(() => {
        if (data) {
            getAuthorizedUser();
        }
    }, [data]);

    if (error) {
        return error.message;
    }
    if (loading) {
        return <Text>Loading...</Text>;
    }

    return { user, loading, refetch: getAuthorizedUser };
};

export default useAuthorizedUser;