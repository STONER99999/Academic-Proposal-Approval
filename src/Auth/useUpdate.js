import { useMutation } from "@tanstack/react-query";
import { UpdateProposalStatus } from "../services/apiProposals";
import toast from "react-hot-toast";

export const useUpdate = () => {
  const { mutate: update, isLoading } = useMutation({
    mutationFn: (value, id) => UpdateProposalStatus(value, id),
    onSuccess: () => {
      toast.success(`Proposal status has been Approved `);
    },
    onError: () => {
      toast.error(`Unable to update proposals status!!`);
    },
  });
  return { update, isLoading };
};
