import { useMutation } from "@apollo/react-hooks";
import { Login, LoginVariables } from "../../generatedTypes";
import { LOGIN_MUTATION } from "../../graphql/loginMutation";
import { useHistory, useLocation } from "react-router-dom";
import Cookies from "js-cookie";


export const useLogin = (
  errorCallback: () => void
) => {
  const history = useHistory();
  const query = new URLSearchParams(useLocation().search);
  const gameId = query.get("gameId");
  
  return useMutation<Login, LoginVariables>(LOGIN_MUTATION, {
    onError: errorCallback,
    onCompleted: (data) => {
      if (!data || !data.login || !data.login.token) {
        errorCallback();
      } else {
        Cookies.set('access_token', data.login.token);
        const path = gameId ? `/game/${gameId}` : '/';
        history.push(path);
      }
    }
  });
}
