import supabase from "./supabase";

export const login = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw new Error(error);
  }
  return data;
};

export const getCurrentUser = async () => {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;
  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error);
  return data?.user;
};
export const logOut = async () => {
  let { error } = await supabase.auth.signOut();
  if (error) throw new error(error.message);
};

// do not use this function because this function is only for superadmin
// const getusers = async () => {
//   const {
//     data: { users },
//     error,
//   } = await supabase.auth.admin.listUsers();
//   if (error) throw new Error(error.message);
//   return users;
// };
// getusers();

export const SignUpApi = async ({
  email,
  password,
  first_name,
  last_name,
  Department,
  universityId,
  phone,
  isFaculty,
}) => {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name,
        last_name,
        Department,
        universityId,
        phone,
        location,
        isFaculty,
      },
    },
  });
  if (error) throw new Error(error.message);
  return data;
};
