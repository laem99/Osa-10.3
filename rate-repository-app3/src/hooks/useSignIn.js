
import { useMutation, useApolloClient } from "@apollo/client";
import { AUTHORIZE } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();

  const signIn = async ({ username, password }) => {
    const mutation = await mutate({ variables: { credentials: { username, password } } });
    const { data } = mutation;

    if (data && data.authorize) {
      await authStorage.setAccessToken(data.authorize.accessToken);
      apolloClient.resetStore();
    }

    return mutation;
  };

  return [signIn, result];
};

export default useSignIn;