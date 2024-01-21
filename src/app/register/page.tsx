"use client";
import { usePasswordInputTypeHook } from "@/utils/use-password-input-type.hook";
import Link from "next/link";
import TheIconEyeOpened from "@/components/icons/TheIconEyeOpened";

export default function Login() {
  const { passwordInputType, togglePasswordInputType } =
    usePasswordInputTypeHook();
  return (
    <div className={"flex flex-col gap-4 justify-center items-center h-screen"}>
      <form className={"flex flex-col gap-4"}>
        <div className={"flex flex-col gap-2"}>
          <label htmlFor="email">Email</label>
          <div
            className={
              "flex gap-2 bg-white items-center border border-primary rounded-lg px-2 py-1 "
            }
          >
            <input
              className={"outline-none autofill:bg-primary"}
              type="text"
              name="email"
              id="email"
              placeholder={"email"}
            />
          </div>
        </div>
        <div className={"flex flex-col gap-2"}>
          <label htmlFor="password">Mot de passe</label>
          <div
            className={
              "flex gap-2 items-center bg-white border border-primary rounded-lg px-2 py-1 "
            }
          >
            <input
              className={"outline-none autofill:bg-primary"}
              type={passwordInputType}
              name="password"
              id="password"
              placeholder={"mot de passe"}
            />
            <TheIconEyeOpened
              className={"hover:cursor-pointer"}
              onClick={togglePasswordInputType}
              width={"20"}
              height={"20"}
            />
          </div>
        </div>
      </form>
      <Link href={"/login"}>Connectez-vous</Link>
    </div>
  );
}
