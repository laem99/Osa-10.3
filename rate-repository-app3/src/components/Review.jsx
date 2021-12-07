import { Formik } from 'formik';
import React from 'react';
import { useHistory } from 'react-router';
import * as Yup from 'yup';
import useCreateReview from '../hooks/useCreateReview';
import ReviewForm from './ReviewForm';

const validationSchema = Yup.object().shape({
    ownerName: Yup
        .string()
        .required('Username is required'),
    repositoryName: Yup
        .string()
        .required('Repository name is required'),
    rating: Yup
        .number()
        .max(100)
        .min(0)
        .required('Rating is required'),
    text: Yup
        .string()
        .optional(),
});

const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: 0,
    text: '',
};

export const ReviewContainer = ({ onReview }) => {
    return (
        <Formik initialValues={initialValues} onSubmit={onReview} validationSchema={validationSchema}>
            {({ handleSubmit }) => <ReviewForm onReview={handleSubmit} />}
        </Formik>
    );
};

const Review = () => {
    const [createRew, result] = useCreateReview();
    let history = useHistory();

    const onReview = async (values) => {
        const { repositoryName, ownerName, rating, text } = values;
        await createRew({
            repositoryName,
            ownerName,
            rating: Number(rating),
            text
        });
    };

    console.log(result);

    if (result.data && !result.loading) {
        history.push(result.data.createReview.repositoryId);
    }

    return <ReviewContainer onReview={onReview} />;
};

export default Review;