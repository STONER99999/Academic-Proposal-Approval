import { useNavigate } from "react-router-dom";
import { useUser } from "../Auth/useUser";
import { MiniSpinner } from "./Spinner";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isLoading, user, isAuthenticated } = useUser();
  console.log(user);
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);
  if (isLoading)
    return (
      <div className="w-full h-[500px] flex justify-center items-center">
        <MiniSpinner ClassName="h-12 w-12  " />
      </div>
    );

  if (isAuthenticated) return children;
};

export default ProtectedRoute;
