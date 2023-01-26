import React, { useRef } from "react";
import { Input } from "../components/Input/Input";
export default function Signup() {
  const userNameRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const imgUrl = useRef<HTMLInputElement>(null);

  return (
    <>
      <h1 className="text-2xl text-start font-bold color"> Hello! </h1>
      <p className="text-gray-400 mt-1 mb-4">Please signup to continue</p>
      <form>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="userName"
          >
            Username
          </label>
          <Input id="userName" pattern="\S*" required ref={userNameRef} />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <Input id="name" pattern="\S*" required ref={nameRef} />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Image Url
          </label>
          <Input id="name" pattern="\S*" required ref={imgUrl} />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-sky-500 hover:bg-sky-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-2"
            type="button"
          >
            Sign Up
          </button>
          {/* <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a> */}
        </div>
      </form>
    </>
  );
}
