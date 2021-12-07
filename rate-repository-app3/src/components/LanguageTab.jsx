import React from "react";
import { Text, View } from "react-native";
import theme from "../theme";

const LanguageTab = (props) => {
    return <View style={{backgroundColor: theme.colors.primary, ...props.style}}><Text testID="repo_lang" style={{ color: 'white', margin: 3 }}>{props.language}</Text></View>;
};

export default LanguageTab;