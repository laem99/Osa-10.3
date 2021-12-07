import React from "react";
import { FlatList, View } from "react-native";
import { useParams } from "react-router";
import useRepository from '../hooks/useRepository';
import useReviews from '../hooks/useReviews';
import RepositoryItem from './RepositoryItem';
import { ItemSeparator } from './RepositoryList';
import ReviewItem from "./ReviewItem";

const RepositoryInfo = ({ repository }) => {
    return (
        <View style={{ paddingBottom: 14, backgroundColor: "white" }}>
            <RepositoryItem item={repository} button={true} />
        </View>
    );
};

const SingleRepo = () => {
    const { id } = useParams();
    let reviewsData;
    const { reviews, fetchMore } = useReviews({
        id,
        first: 10,
    });
    const { repository } = useRepository(id);

    if (!reviews) {
        reviewsData = [];
    } else {
        reviewsData = reviews.edges;
    }

    const onEndReach = () => {
        fetchMore();
    };

    if (!repository) {
        return null;
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList onEndReachedThreshold={0.5} onEndReach={onEndReach} data={reviewsData} renderItem={({ item }) => <ReviewItem review={item} />} ListFooterComponent={<View style={{ height: 20, backgroundColor: '#e1e4e8' }} />}
                keyExtractor={(item) => item.node.id} ListHeaderComponent={() => <RepositoryInfo repository={repository} />} ItemSeparatorComponent={ItemSeparator} />
        </View>
    );
};

export default SingleRepo;