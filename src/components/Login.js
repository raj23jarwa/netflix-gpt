import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const toggleSignIn = () => {
    setSignIn(!signIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
          className="object-cover w-full h-full"
        />
      </div>
      <form className="w-1/4 bg-black opacity-85 p-12 text-white mx-auto left-0 top-44 bottom-0 relative flex flex-col">
        <h1 className="text-3xl text-white font-bold py-4">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        <div className="flex flex-col items-center gap-8">
          {!signIn && (
            <input
              type="text"
              placeholder="Name"
              className="py-4 rounded-lg px-2 m-2 w-80 bg-gray-800 font-bold focus:text-white"
            />
          )}

          <input
            type="email"
            placeholder="Email or Mobile Number"
            className="py-4 rounded-lg px-2 m-2 w-80 bg-gray-800 font-bold focus:text-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="py-4 rounded-lg px-2 m-2 w-80 bg-gray-800 font-bold"
          />
          <button className="py-4 px-2 text-xl bg-[#e0242c] w-80 rounded-lg">
            Submit
          </button>
        </div>
        {signIn && (
          <>
            <p className="text-center py-4">OR</p>
            <button className="px-2 py-3 bg-gray-900 rounded-lg hover:bg-gray-950">
              Use a Sign-in code
            </button>
            <p className="text-center py-4 underline cursor-pointer">
              Forgot Password?
            </p>
            <div className="flex gap-4">
              <input type="checkbox" />
              <span>Remember me</span>
            </div>
          </>
        )}
        <div className="py-4">
          <span> {signIn ? "New to Netflix? "  :"Already a user " }</span>
          <span
            className="underline cursor-pointer text-lg"
            onClick={toggleSignIn}
          >
            {signIn ? " Sign up now" : "Sign in now"}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
