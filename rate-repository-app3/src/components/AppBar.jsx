import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import useAuthorizedUser from '../hooks/useAuthorizedUser';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import { useHistory } from 'react-router';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flexGrow: 0.07,
        flexShrink: 1,
        backgroundColor: '#24292e',
        flexDirection: 'row',
    },
});

const AppBar = () => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    const { user } = useAuthorizedUser();
    const history = useHistory();
    const authUser = user ? user.authorizedUser : undefined;

    const signOut = async () => {
        await authStorage.removeAccessToken();
        apolloClient.resetStore();
        history.push("/");
      };

    return <View style={styles.container}>
        <ScrollView style={{ flexDirection: 'row' }} horizontal>
            <AppBarTab name="Repositories" url="/" />
            {authUser
                ? <AppBarTab name="Sign Out" onPress={signOut} />
                : <AppBarTab name="Sign In" url="signin" />
            }
        </ScrollView>
    </View>;
};

export default AppBar;