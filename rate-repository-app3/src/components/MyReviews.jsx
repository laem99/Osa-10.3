import React from 'react';
import { useQuery } from '@apollo/client';
import { AUTHORIZED_USER } from '../graphql/queries';
import { FlatList, View } from 'react-native';
import { ItemSeparator } from './RepositoryList';
import MyReviewItem from './MyReviewItem';

const MyReviews = () => {
    let rewData;
    const { data, refetch } = useQuery(AUTHORIZED_USER, {
        variables: {
            includeReviews: true,
        },
        fetchPolicy: 'cache-and-network'
    });

    if (!data) {
        rewData = [];
    } else {
        rewData = data.authorizedUser.reviews.edges;
    }

    return (
        <FlatList ItemSeparatorComponent={ItemSeparator} data={rewData}
            renderItem={({ item }) => <MyReviewItem refetch={refetch} review={item} />}
            keyExtractor={(item) => item.node.id}
            ListFooterComponent={<View style={{ height: 20 }} />}
        />
    );
};

export default MyReviews;