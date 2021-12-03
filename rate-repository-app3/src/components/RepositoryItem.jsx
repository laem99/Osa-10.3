import React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import LanguageTab from "./LanguageTab";
import StyledText from './Text';
import { NumberCount, Numbers } from "./Count";

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
    separator: {
        height: 10,
        backgroundColor: '#e1e4e8',
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryItem = (props) => {
    return (
        <FlatList ListFooterComponent={<View style={{height: 20}}/>} ItemSeparatorComponent={ItemSeparator} data={props.data} renderItem={({ item }) => (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image style={styles.logo} source={{ uri: item.ownerAvatarUrl }} />
                    <View style={styles.mainInfo}>
                        <StyledText style={styles.textStyle} fontWeight="bold" fontSize="subheading">{item.fullName}</StyledText>
                        <StyledText style={styles.textStyle} color="textSecondary">{item.description}</StyledText>
                        <LanguageTab style={{ alignSelf: 'flex-start' }} language={item.language} />
                    </View>
                </View>
                <View style={styles.rowContainer2}>
                    <NumberCount number={item.stargazersCount} name="Stars" />
                    <NumberCount number={item.forksCount} name="Forks" />
                    <Numbers number={item.reviewCount} name="Reviews" />
                    <Numbers number={item.ratingAverage} name="Rating" />
                </View>
            </View>
        )}>
        </FlatList>
    );
};

export default RepositoryItem;