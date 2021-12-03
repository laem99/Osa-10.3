import { Formik } from 'formik';
import React from 'react';
import SignInForm from './SignInForm';
import * as Yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router';

const validationSchema = Yup.object().shape({
  username: Yup
    .string()
    .required('Username is required'),
  password: Yup
    .string()
    .required('Password is required'),
});

const initialValues = {
  username: '',
  password: '',
};

const SignIn = () => {
  const [signIn] = useSignIn();
  let history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ isSubmitting, handleSubmit }) => (
        <SignInForm isSubmitting={isSubmitting} handleSubmit={handleSubmit} />
      )}
    </Formik>
  );
};

export default SignIn;