import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";

const styles = StyleSheet.create({
    button: {
        marginTop: 40,
        backgroundColor: theme.colors.primary,
        padding: 20,
        borderRadius: 5,
        margin: 15,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});

const SignInForm = ({ isSubmitting, handleSubmit }) => {
    return (
        <View style={{ flex: 1 }}>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput name="password" placeholder="Password" />
            <Pressable onPress={handleSubmit} style={styles.button} type="submit" disabled={isSubmitting}>
                <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>
        </View>
    );
};

export default SignInForm;