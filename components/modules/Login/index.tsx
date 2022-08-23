import React, { useRef } from "react";

const Login = () => {
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex h-screen flex-col justify-center items-center px-5 gap-6">
      <h1 className="flex flex-col gap-2 items-center -mt-10 py-10">
        <span className="text-4xl text-white">
          <b className="text-teal-400">GLAC</b> System
        </span>
        <span className="text-white">Monitor your water consumtion here</span>
      </h1>

      <div className="flex flex-col gap-5 w-full">
        <input
          type="text"
          name="username"
          placeholder="User name"
          className="w-full bg-transparent text-white outline-none border px-2 py-2 rounded-md shadow-md transition-all border-teal-500 focus:shadow-teal-400 "
        />
        <input
          ref={inputPasswordRef}
          type="password"
          name="userPassword"
          placeholder="Password"
          className="w-full bg-transparent text-white outline-none border px-2 py-2 rounded-md shadow-md transition-all border-teal-500 focus:shadow-teal-400 "
        />
      </div>
      <div className="flex flex-col gap-4">
        <button className="bg-teal-400 py-2 rounded-3xl">Log in</button>
        <p className="text-white text-sm">
          You don&apos;t have an account ?{" "}
          <a className="text-teal-500 cursor-pointer">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
