import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (id) => {
    const [repository, setRepository] = useState();
    const { error, loading } = useQuery(GET_REPOSITORY, {
        fetchPolicy: 'cache-and-network',
        variables: { id },
        onCompleted: (data) => {
            setRepository(data.repository);
        }
    });

    return { repository, error, loading };
};

export default useRepository;