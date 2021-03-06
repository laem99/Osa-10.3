import React from "react";
import { Button, StyleSheet, View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";

export const styles = StyleSheet.create({
    button: {
        marginTop: 40,
        backgroundColor: theme.colors.primary,
        padding: 20,
        borderRadius: 5,
        margin: 15,
    }
});

const SignInForm = ({ onSubmit }) => {
    return (
        <View style={{ flex: 1 }}>
            <FormikTextInput testID="usernameField" name="username" placeholder="Username" />
            <FormikTextInput testID="passwordField" name="password" placeholder="Password" />
            <Button testID='submit_form' style={styles.button} title="Sign In" onPress={onSubmit} />
        </View>
    );
};

export default SignInForm;