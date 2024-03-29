import toast from "react-hot-toast";
import supabase from "./supabase";

export const getProposals = async () => {
  let { data, error } = await supabase.from("proposals").select("*");
  if (error) {
    console.error(error);
    throw new Error("Proposals are not loaded");
  }
  return data;
};

export const UpdateProposalStatus = async (value, id) => {
  const { data, error } = await supabase
    .from("proposals")
    .update({ status: value })
    .eq("id", id)
    .select();
  if (error) {
    toast.error("proposal can not be updated");
  }
  toast.success("proposal has been updated");
  return data;
};

export const CreateProposal = async (newProposal) => {
  const imageName = `${Math.random()}-${newProposal.file.name}`.replace(
    "/",
    ""
  );
  const imagePath = `${
    import.meta.env.VITE_BASE_URL
  }/storage/v1/object/public/proposals/${imageName}`;
  const { data, error } = await supabase
    .from("proposals")
    .insert([{ ...newProposal, file: imagePath }])
    .select();
  if (error) {
    throw new Error(error.message);
  }

  const { error: storageError } = await supabase.storage
    .from("proposals")
    .upload(imageName, newProposal.file);
  if (storageError) throw new Error("");

  return data;
};
