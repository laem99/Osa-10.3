import React from "react";
import { Button, Image, Linking, Pressable, StyleSheet, View } from "react-native";
import LanguageTab from "./LanguageTab";
import StyledText from './Text';
import { NumberCount } from "./Count";
import theme from "../theme";
import { useHistory } from "react-router";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    rowContainer: {
        flexDirection: 'row',
        margin: 10,
    },
    rowContainer2: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    logo: {
        width: 66,
        height: 58,
    },
    mainInfo: {
        margin: 10,
    },
    textStyle: {
        padding: 2,
    },
    button: {
        marginTop: 40,
        backgroundColor: theme.colors.primary,
        padding: 20,
        borderRadius: 5,
        margin: 15,
    }
});

const RepositoryItem = ({ item, button }) => {
    const history = useHistory();
    const {
        id,
        fullName,
        description,
        language,
        forksCount,
        stargazersCount,
        ratingAverage,
        reviewCount,
        ownerAvatarUrl,
        url,
      } = item;
    return (
        <Pressable onPress={() => history.push(`/${id}`)} style={styles.container}>
            <View style={styles.rowContainer}>
                <Image style={styles.logo} source={{ uri: ownerAvatarUrl }} />
                <View style={styles.mainInfo}>
                    <StyledText testID="repo_name" style={styles.textStyle} fontWeight="bold" fontSize="subheading">{fullName}</StyledText>
                    <StyledText testID="repo_desc" style={styles.textStyle} color="textSecondary">{description}</StyledText>
                    <LanguageTab style={{ alignSelf: 'flex-start' }} language={language} />
                </View>
            </View>
            <View style={styles.rowContainer2}>
                <NumberCount number={stargazersCount} name="Stars" />
                <NumberCount number={forksCount} name="Forks" />
                <NumberCount number={reviewCount} name="Reviews" />
                <NumberCount number={ratingAverage} name="Rating" />
            </View>
            <View>
                {(button)
                    ? <Button style={styles.button} title="Open in Github" onPress={() => Linking.openURL(url)} />
                    : null}
            </View>
        </Pressable>
    );
};

export default RepositoryItem;