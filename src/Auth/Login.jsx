import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "./useLogin";
import { MiniSpinner } from "../components/Spinner";
import { Toaster } from "react-hot-toast";
import logo from "../assets/logo.png";

import person from "../assets/person.png";
import { Input, Checkbox, Typography } from "@material-tailwind/react";
import backgroundImage from "../assets/university.jpeg";
import { CustomCheckBox } from "../components/check_box";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail(""), setPassword("");
        },
      }
    );
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div class="flex justify-center items-center mt-10">
        <div
          className="relative flex items-center justify-center w-full h-screen text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border"
          style={{
            backgroundImage: `url(${null})`,
            backgroundSize: "cover",
          }}
        >
          <Toaster />
          <div class=" px-20 py-20  ml-30">
            <img src={logo} alt="react logo" class="mb-10" />
            <Typography
              variant="h4"
              className=" font-normal"
              style={{ color: "#344054" }}
            >
              Login
            </Typography>
            <Typography
              variant="h6"
              className="mt-2  font-normal"
              style={{ color: "#667085" }}
            >
              Welcome to Tutor.
            </Typography>
            <form className="">
              <div className="w-[30rem] mt-10">
                <h3 class="mb-2" style={{ color: "#212B36" }}>
                  Email
                </h3>

                <Input
                  type="email"
                  placeholder="email"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 pr-10"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <div className="w-[30rem] mt-5">
                <h3 class="mb-2" style={{ color: "#212B36" }}>
                  Password
                </h3>

                <div className="relative">
                  <Input
                    value={password}
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    className="!border-t-blue-gray-200 focus:!border-t-gray-900 pr-10"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                  />
                  <button
                    className="absolute top-1/2 transform -translate-y-1/2 right-3"
                    onClick={handleTogglePassword}
                  >
                    {showPassword ? (
                      <span class="material-symbols-outlined">visibility</span>
                    ) : (
                      <span class="material-symbols-outlined">
                        visibility_off
                      </span>
                    )}
                  </button>
                </div>
              </div>
              {/* <CustomCheckBox checkData={"Remeber me"} /> */}
              <button
                onClick={handleSubmit}
                className="mt-6  w-full flex justify-center select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                disabled={isLoading}
              >
                {!isLoading ? "Log In" : <MiniSpinner />}
              </button>

              <Typography
                className="mt-5  font-normal text-center"
                style={{ color: "#344054" }}
              >
                Don't have an account ?{" "}
                <Link
                  to={"/signup"}
                  className="font-medium ml-1 underline"
                  style={{ color: "#0D3294" }}
                >
                  Register
                </Link>
              </Typography>
            </form>
          </div>
          <div class="ml-40 h-120 mr-10 px-20 py-20 ">
            <img src={person} alt="react logo" class="mr-4 mb-6 ml-20 " />
            <Typography
              variant="h4"
              className="mt-2  font-normal text-center"
              style={{ color: "#344054", fontWeight: 500 }}
            >
              "There is no failure.Only feedback."
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
