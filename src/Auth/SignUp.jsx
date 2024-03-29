import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useSignUp } from "./useSignUp";
import logo from "../assets/logo.png";

import person from "../assets/person.png";
import { Input, Typography } from "@material-tailwind/react";
import { CustomCheckBox } from "../components/check_box";
import { MiniSpinner } from "../components/Spinner";
// import backgroundImage from "../assets/university.jpeg";
// const backgroundImage = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.usnews.com%2Fbest-colleges%2Fgannon-university-3266%2Fcampus-info&psig=AOvVaw3HbIU9xGaINR4PZ1ufI4n2&ust=1709636248082000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLDzy7u52oQDFQAAAAAdAAAAABAR'

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [universityId, setUniversityId] = useState("");
  const [Department, setDepartment] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  // const [biography, setBiography] = useState("");

  const { signup, isLoading } = useSignUp();
  const handleSubmit = () => {
    if (!email || !password) return;
    signup(
      {
        email,
        password,
        first_name,
        last_name,
        Department,
        universityId,
        phone,
        location,
        isFaculty: true,
      },
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
      <div className="flex justify-center items-center mt-5 mb-20">
        <div
          className="relative flex items-center justify-center w-full h-screen text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border"
          style={{
            backgroundImage: `url(${null})`,
            backgroundSize: "cover",
          }}
        >
          <Toaster />
          <div className=" px-20 py-20  ml-30 mt-10">
            <img src={logo} alt="react logo" className="mb-3 mt-10" />
            <Typography
              variant="h4"
              className=" font-normal mt-5"
              style={{ color: "#344054" }}
            >
              Register
            </Typography>
            <Typography
              variant="h6"
              className="mt-3  font-normal"
              style={{ color: "#667085" }}
            >
              Welcome to proposal system.
            </Typography>
            <form className="">
              <div className="w-[30rem] mt-5">
                <h3 className="mb-2" style={{ color: "#212B36" }}>
                  Frist Name
                </h3>
                <Input
                  value={first_name}
                  type="text"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 pr-10"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={(e) => setFirstName(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <div className="w-[30rem] mt-5">
                <h3 className="mb-2" style={{ color: "#212B36" }}>
                  Last Name
                </h3>

                <Input
                  value={last_name}
                  type="text"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 pr-10"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={(e) => setLastName(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <div className="w-[30rem] mt-5">
                <h3 className="mb-2" style={{ color: "#212B36" }}>
                  Department ID
                </h3>

                <Input
                  value={Department}
                  type="text"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 pr-10"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={(e) => setDepartment(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <div className="w-[30rem] mt-5">
                <h3 className="mb-2" style={{ color: "#212B36" }}>
                  University ID
                </h3>

                <Input
                  value={universityId}
                  type="text"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 pr-10"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={(e) => setUniversityId(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <div className="w-[30rem] mt-5">
                <h3 className="mb-2" style={{ color: "#212B36" }}>
                  phone
                </h3>

                <Input
                  value={phone}
                  type="text"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 pr-10"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              {/* <div className="w-[30rem] mt-5">
                <h3 class="mb-2" style={{ color: "#212B36" }}>
                  Location
                </h3>

                <Input
                  value={location}
                  type="text"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 pr-10"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={(e) => setLocation(e.target.value)}
                  disabled={isLoading}
                />
              </div> */}

              <div className="w-[30rem] mt-5">
                <h3 className="mb-2" style={{ color: "#212B36" }}>
                  Email
                </h3>

                <Input
                  value={email}
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
                <h3 className="mb-2" style={{ color: "#212B36" }}>
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
                      <span className="material-symbols-outlined">
                        visibility
                      </span>
                    ) : (
                      <span className="material-symbols-outlined">
                        visibility_off
                      </span>
                    )}
                  </button>
                </div>
              </div>
              <CustomCheckBox checkData={"I agree terms & conditions."} />
              <button
                onClick={handleSubmit}
                className="mt-6  w-full flex justify-center select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                disabled={isLoading}
              >
                {!isLoading ? "Register" : <MiniSpinner />}
              </button>

              <Typography
                className="mt-2  font-normal text-center"
                style={{ color: "#344054" }}
              >
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="font-medium ml-1 underline"
                  style={{ color: "#0D3294" }}
                >
                  Log In
                </Link>
              </Typography>
            </form>
          </div>
          <div className="ml-40 h-120 mr-10 px-20 py-20 ">
            <img src={person} alt="react logo" className="mr-4 mb-6 ml-20 " />
            <Typography
              variant="h4"
              className="mt-2  font-normal text-center"
              style={{ color: "#344054", fontWeight: 500 }}
            >
              {"There is no failure.Only feedback."}
            </Typography>

            {/* <p
              class="text-center mt-2 "
              style={{ color: "#1D2939", fontSize: 14 }}
            >
              The primary responsibilities of a tutor is to support students
              <br></br>
              (tutees) to become more independent learners, persist in college,
              and reach<br></br> their goals.
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
