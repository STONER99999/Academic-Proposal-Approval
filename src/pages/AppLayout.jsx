import { Outlet } from "react-router-dom";
import { MultiLevelSidebar } from "../components/Drawer";

const AppLayout = () => {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex  ">
          <MultiLevelSidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AppLayout;
