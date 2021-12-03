import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
    text: {
        color: 'grey',
        fontSize: 14,
        marginLeft: 20,
    },
    blueText: {
        color: 'white',
    },
    bigText: {
        fontSize: 24,
        fontWeight: '700',
    },
    container: {
        flexDirection: 'row',
    }
});

const FancyText = ({ isBlue, isBig, children }) => {
    const textStyles = [
        styles.text,
        isBlue && styles.blueText,
        isBig && styles.bigText,
    ];

    return <Text style={textStyles}>{children}</Text>;
};

const AppBarTab = ({ name, url, onPress }) => {

    if (name === 'Sign Out') {
        return (
            <View style={styles.container}>
                <Pressable onPress={onPress}><FancyText isBig isBlue>{name}</FancyText></Pressable>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Link to={url}><FancyText isBig isBlue>{name}</FancyText></Link>
        </View>
    );
};

export default AppBarTab;