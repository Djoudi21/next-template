import { useState } from "react";

export const usePasswordInputTypeHook = () => {
  const [passwordInputType, setPasswordInputType] = useState<
    "password" | "text"
  >("password");
  const togglePasswordInputType = () => {
    passwordInputType === "password"
      ? setPasswordInputType("text")
      : setPasswordInputType("password");
  };
  return { passwordInputType, togglePasswordInputType };
};
