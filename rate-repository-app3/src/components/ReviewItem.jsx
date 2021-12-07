import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./Text";

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
    textStyle: {
        padding: 2,
    },
    ratingContainer: {
        width: 40,
        height: 40,
        borderStyle: "solid",
        borderRadius: 20,
        borderColor: "blue",
        borderWidth: 2,
        alignItems: "center",
    },
});

const dateTime = (date) => {
    const date2 = new Date(date).toLocaleDateString();
    return date2;
};

const ReviewItem = ({ review }) => {
    if (!review) {
        return null;
    }
    return (
        <View key={review.node.id} style={styles.container}>
            <View style={styles.rowContainer}>
                <View style={styles.ratingContainer}>
                    <StyledText fontWeight='bold' style={{ marginTop: 9, color: "blue" }}>
                        {review.node.rating}
                    </StyledText>
                </View>
                <View style={{ marginLeft: 10 }}>
                    <StyledText
                        style={styles.textStyle}
                        fontWeight='bold'
                        fontSize='subheading'
                        numberOfLines={1}
                    >
                        {review.node.user.username}
                    </StyledText>
                    <StyledText
                        testID='repositoryDescription'
                        style={styles.textStyle}
                        color='textSecondary'
                    >
                        {dateTime(review.node.createdAt)}
                    </StyledText>
                </View>
            </View>
            <StyledText style={{ margin: 5 }}>{review.node.text}</StyledText>
        </View>
    );
};

export default ReviewItem;