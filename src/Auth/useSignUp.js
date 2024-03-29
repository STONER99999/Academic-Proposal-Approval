import { useMutation } from "@tanstack/react-query";
import { SignUpApi } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useSignUp = () => {
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({
      email,
      password,
      first_name,
      last_name,
      Department,
      universityId,
      phone,
      isFaculty,
    }) =>
      SignUpApi({
        email,
        password,
        first_name,
        last_name,
        Department,
        universityId,
        phone,
        location,
        isFaculty,
      }),
    onSuccess: () => {
      navigate("/login");
      toast.success("Account Created Successfully");
    },
    onError: () => {
      toast.error("opps! something went wrong");
    },
  });
  return { signup, isLoading };
};
