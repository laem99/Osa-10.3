import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import { Picker } from '@react-native-picker/picker';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
    separator: {
        height: 10,
        backgroundColor: '#e1e4e8',
    },
    picker: {
        margin: 5,
        backgroundColor: "white",
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: "black",
        color: "black",
        paddingRight: 30,
    },
});

export const ItemSeparator = () => <View style={styles.separator} />;

const Header = ({ setSortBy, sortBy }) => {
    return (
        <View>
            <Picker style={styles.picker} selectedValue={sortBy} onValueChange={(value) => setSortBy(value)}>
                <Picker.Item label="Latest Repositories" value="CREATED_AT" />
                <Picker.Item label="Highest Rated Repositories" value="DESC" />
                <Picker.Item label="Lowest Rated Repositories" value="ASC" />
            </Picker>
        </View>
    );
};

export const RepositoryListContainer = ({ data, onEndReach, sortBy, setSortBy }) => {
    const repositoryNodes = data
        ? data.edges.map(edge => edge.node)
        : [];

    return (
        <FlatList testID="repoItem" ListFooterComponent={<View style={{ height: 20 }} />} ItemSeparatorComponent={ItemSeparator} data={repositoryNodes}
            onEndReached={onEndReach} onEndReachedThreshold={0.5} ListHeaderComponent={<Header setSortBy={setSortBy} sortBy={sortBy} />}
            renderItem={({ item }) => (<RepositoryItem item={item} />)}
        />
    );
};

const RepositoryList = () => {
    const [sortBy, setSortBy] = useState('');
    const { repositories, fetchMore } = useRepositories({
        sortBy,
        first: 5,
    });

    const onEndReach = () => {
        fetchMore();
    };

    return (
        <View style={{ flex: 1 }}>
            <RepositoryListContainer onEndReach={onEndReach} data={repositories} setSortBy={setSortBy} sortBy={sortBy} />
        </View>
    );
};

export default RepositoryList;