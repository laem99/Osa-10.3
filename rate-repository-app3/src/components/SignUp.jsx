import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router';
import SignUpForm from './SignUpForm';

const validationSchema = Yup.object().shape({
    username: Yup
        .string()
        .min(1)
        .max(30)
        .required('Username is required'),
    password: Yup
        .string()
        .min(5)
        .max(50)
        .required('Password is required'),
    confirm_password: Yup
        .string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const initialValues = {
    username: '',
    password: '',
    confirm_password: '',
};

export const SignUpContainer = ({ onSubmit }) => {
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

const SignUp = () => {
    const [signUp] = useSignUp();
    const [signIn] = useSignIn();
    let history = useHistory();

    const onSubmit = async (values) => {

        console.log(values);
        const { username, password } = values;

        try {
            await signUp({ username, password });
            await signIn({ username, password });
            history.push('/');
        } catch (e) {
            console.log(e);
        }
    };

    return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;