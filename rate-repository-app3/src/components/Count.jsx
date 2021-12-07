import React from "react";
import { View } from "react-native";
import StyledText from './Text';

export const NumberCount = (props) => {
    let number = props.number;
    if (number >= 1000) {
        number = (number / 1000).toFixed(1) + 'k';
    }

    return (
        <View style={{ display: 'flex', alignItems: 'center' }}>
            <StyledText testID="repo_count" fontWeight="bold" fontSize="subheading">{number}</StyledText>
            <StyledText fontSize="textSecondary">{props.name}</StyledText>
        </View>
    );
};