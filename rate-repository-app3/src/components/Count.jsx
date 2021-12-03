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
            <StyledText fontWeight="bold" fontSize="subheading">{number}</StyledText>
            <StyledText fontSize="textSecondary">{props.name}</StyledText>
        </View>
    );
};

export const Numbers = (props) => {
    return (
        <View style={{ display: 'flex', alignItems: 'center' }}>
            <StyledText fontWeight="bold" fontSize="subheading">{props.number}</StyledText>
            <StyledText fontSize="textSecondary">{props.name}</StyledText>
        </View>
    );
};