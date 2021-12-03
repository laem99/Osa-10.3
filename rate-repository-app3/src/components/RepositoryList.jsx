import React from 'react';
import { View } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const RepositoryList = () => {

    const { repositories } = useRepositories();

    const repositoryNodes = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];

    return (
        <View style={{ flex: 1 }}>
            <RepositoryItem
                data={repositoryNodes}
            />
        </View>
    );
};

export default RepositoryList;