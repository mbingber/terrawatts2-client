import { useMutation } from "@apollo/react-hooks";
import { toast } from "react-toastify";

export function useGameMutation<T, TVariables>(mutation: any, onCompleted?: () => void) {
  return useMutation<T, TVariables>(mutation, {
    onError: (error) => toast.error(error.message),
    ...(onCompleted ? { onCompleted } : {})
  });
}
