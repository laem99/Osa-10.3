import React from "react";
import { View, StyleSheet, Button, Alert } from "react-native";
import { useHistory } from "react-router";
import useDeleteReview from "../hooks/useDeleteReview";
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
    blueButton: {
        marginTop: 40,
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 5,
        margin: 15,
        width: 50
    },
    redButton: {
        marginTop: 40,
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 5,
        margin: 15,
    }
});

const dateTime = (date) => {
    const date2 = new Date(date).toLocaleDateString();
    return date2;
};

const MyReviewItem = ({ review, refetch }) => {
    if (!review) {
        return null;
    }
    let history = useHistory();
    const [deleteReview] = useDeleteReview();

    const deletereview = () => {
        deleteReview(review.node.id);
        refetch();
    };

    const deleteRew = () => {
        Alert.alert(
            "Delete review",
            "Are you sure you want to delete this review?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "Delete", onPress: () => deletereview() }
            ]
          );
    };

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
            <View>
                <Button onPress={() => history.push(`/${review.node.repositoryId}`)} style={styles.blueButton} title="View repository" />
                <Button onPress={deleteRew} style={styles.redButton} title="Delete review" />
            </View>
        </View>
    );
};

export default MyReviewItem;