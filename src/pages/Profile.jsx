import { useUser } from "../Auth/useUser";

const Profile = () => {
  const {
    user: {
      email,
      user_metadata: { Department, first_name, last_name, phone, universityId },
    },
  } = useUser();
  return (
    <div className="min-h-screen  flex justify-center ml-20">
      <div className="max-w-md  p-8  ">
        <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
        <div className="flex items-center space-x-4 mb-4">
          <img
            src="https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg"
            alt="User Profile"
            className="rounded-full h-20 w-20"
          />
          <div>
            <h3 className="text-xl font-semibold">{`${first_name} ${last_name}`}</h3>
            <p className="text-gray-600">Professor</p>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center mb-2">
            <span className="text-gray-600 mr-2">Email:</span>
            <p>{email}</p>
          </div>
          <div className="flex items-center mb-2">
            <span className="text-gray-600 mr-2">Location:</span>
            <p>{"USA"}</p>
          </div>
          <div className="flex items-center mb-2">
            <span className="text-gray-600 mr-2">Phone:</span>
            <p>{phone}</p>
          </div>
          <div className="flex items-center mb-2">
            <span className="text-gray-600 mr-2">Bio:</span>
            <p>{"No Bio Available"}</p>
          </div>
          <div className="flex items-center mb-2">
            <span className="text-gray-600 mr-2">Department</span>
            <p>{Department}</p>
          </div>
          <div className="flex items-center mb-2">
            <span className="text-gray-600 mr-2">universityId</span>
            <p>{universityId}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
