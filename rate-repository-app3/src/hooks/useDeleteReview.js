import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from '../graphql/mutations';

const useDeleteReview = () => {
    const [mutate, result] = useMutation(DELETE_REVIEW);

    const deleteRew = async (id) => {
        const result = await mutate({
            variables: { id },
        });
        return result;
    };

    return [deleteRew, result];
}; 

export default useDeleteReview;