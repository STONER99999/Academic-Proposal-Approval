import supabase from "./supabase";

export const getUsers = async () => {
  let { data, error } = await supabase.from("students").select("*");
  if (error) {
    console.error(error);
    throw new Error("students are not loaded");
  }
  return data;
};
