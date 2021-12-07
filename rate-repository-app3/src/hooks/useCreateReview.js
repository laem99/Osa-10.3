import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
    const [mutate, result] = useMutation(CREATE_REVIEW);

    const createRew = async (review) => {
        const { items } = await mutate({
            variables: { review },
        });

        return items;
    };

    return [createRew, result];
};

export default useCreateReview;