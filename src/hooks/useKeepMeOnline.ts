import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import { KEEP_ME_ONLINE_MUTATION } from "../graphql/keepMeOnlineMutation";
import { KeepMeOnline } from "../generatedTypes";

export const useKeepMeOnline = () => {
  const [keepMeOnline] = useMutation<KeepMeOnline>(KEEP_ME_ONLINE_MUTATION);

  useEffect(() => {
    const interval = setInterval(keepMeOnline, 5000);

    return () => clearInterval(interval);
  });
}
