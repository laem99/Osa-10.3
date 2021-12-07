import { Button, Text, View } from 'react-native';
import React from 'react';
import FormikTextInput, { FormikNumberInput } from './FormikTextInput';
import { styles } from './SignInForm';

const ReviewForm = ({ onReview }) => {
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>You can review the same repository only once!</Text>
            <FormikTextInput name="ownerName" placeholder="ownerName" />
            <FormikTextInput name="repositoryName" placeholder="repository name" />
            <FormikNumberInput name="rating" placeholder={0} />
            <FormikTextInput name="text" placeholder="review" />
            <Button style={styles.button} title="Review" onPress={onReview} />
        </View>
    );
};

export default ReviewForm;