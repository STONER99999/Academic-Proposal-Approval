import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import { useUser } from "./useUser";
export const useLogin = () => {
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      navigate("/");
      toast.success(`Welcome back `);
    },
    onError: () => {
      toast.error("Invalid login Credentials!!");
    },
  });

  return { login, isLoading };
};
