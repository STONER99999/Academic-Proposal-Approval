import { Input } from "@material-tailwind/react";
import { useState } from "react";
export function PasswordField({ passwordText }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-[30rem] mt-5">
      <h3 class="mb-2" style={{ color: "#212B36" }}>
        {passwordText}
      </h3>

      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="********"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 pr-10"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-3"
          onClick={handleTogglePassword}
        >
          {showPassword ? (
            <span class="material-symbols-outlined">visibility</span>
          ) : (
            <span class="material-symbols-outlined">visibility_off</span>
          )}
        </button>
      </div>
    </div>
  );
}
