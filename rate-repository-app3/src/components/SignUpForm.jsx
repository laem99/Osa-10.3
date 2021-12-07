import React from "react";
import { Button, StyleSheet, View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";

export const styles = StyleSheet.create({
    button: {
        paddingTop: 80,
        backgroundColor: theme.colors.primary,
        padding: 20,
        borderRadius: 5,
        margin: 15,
    }
});

const SignUpForm = ({ onSubmit }) => {
    return (
        <View style={{ flex: 1 }}>
            <FormikTextInput testID="usernameField" name="username" placeholder="Username" />
            <FormikTextInput testID="passwordField" name="password" placeholder="Password" />
            <FormikTextInput testID="confirmPasswordField" name="confirm_password" placeholder="Confirm Password" />
            <Button style={styles.button} title="Sign Un" onPress={onSubmit} />
        </View>
    );
};

export default SignUpForm;