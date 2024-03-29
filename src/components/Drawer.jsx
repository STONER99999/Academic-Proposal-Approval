import React, { useState, useEffect } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Accordion,
  AccordionHeader,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { MiniSpinner } from "./Spinner";
import { useLogOut } from "../Auth/useLogOut";
import { getCurrentUser } from "../services/apiAuth";

export function MultiLevelSidebar() {
  const [open, setOpen] = React.useState(0);
  const { logout, isLoading } = useLogOut();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await getCurrentUser();
        setIsAdmin(user && user?.user_metadata.isFaculty == true);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };

    getUser();
  }, []);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  // const isAdmin = () => {
  //   return currentUser && currentUser.role === "admin";
  // };
  const signOut = () => {
    logout();
  };
  return (
    <Card className="h-[calc(100vh-2rem)]  w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Link to={"/"}>
          <Typography variant="h5" color="blue-gray">
            Proposal Approval Application System
          </Typography>
        </Link>
      </div>
      <List>
        {!isAdmin && (
          <Link to={"dashboard"}>
            <Accordion open={open === 1}>
              <ListItem className="p-0" selected={open === 1}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                    <PresentationChartBarIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Dashboard
                  </Typography>
                </AccordionHeader>
              </ListItem>
            </Accordion>
          </Link>
        )}
        {!isAdmin && (
          <Accordion>
            <Link to={"proposals"}>
              <ListItem className="p-0">
                <AccordionHeader className="border-b-0 p-3">
                  <ListItemPrefix>
                    <ShoppingBagIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    proposals
                  </Typography>
                </AccordionHeader>
              </ListItem>
            </Link>
          </Accordion>
        )}
        {/* {isAdmin && (
          <Link to={"users"}>
            <ListItem>
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              users
              <ListItemSuffix></ListItemSuffix>
            </ListItem>
          </Link>
        )} */}

        <Link to={"form"}>
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Submit
            <ListItemSuffix></ListItemSuffix>
          </ListItem>
        </Link>

        {
          <Link to={"profile"}>
            <ListItem>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Profile
            </ListItem>
          </Link>
        }

        <Link to={"status"}>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            My proposal status
          </ListItem>
        </Link>

        <button onClick={signOut}>
          <Link>
            <ListItem>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              {!isLoading ? "Log out" : <MiniSpinner />}
            </ListItem>
          </Link>
        </button>
      </List>
    </Card>
  );
}
