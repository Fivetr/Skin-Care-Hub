import React, { useState } from "react";
import { ImSpinner8 } from "react-icons/im";
import { RiArrowGoBackLine } from "react-icons/ri";

function register({ setAuthMenu }) {
  const [loading, setloading] = useState(true);
  const [UserInput, setUserInput] = useState({ user: "", password: "" });
  const handleSubmit = () => {};
  const handleChange = (e) => {
    setUserInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(UserInput);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 pt-[15%] w-[25rem] mx-auto"
    >
      <div className="flex justify-between">
        <h1 className="text-2xl font-medium">Register</h1>
        <a
          className="w-[30%] flex justify-end items-center gap-2 cursor-pointer underline text-center"
          onClick={() => setAuthMenu(true)}
        >
          <RiArrowGoBackLine />
        </a>
      </div>

      <label htmlFor="email" className="mb-2 block text-sm font-medium">
        User Name or Email
      </label>
      <input
        type="text"
        id="user"
        name="user"
        className="input"
        required
        onChange={handleChange}
      />

      <label htmlFor="email" className="mb-2 block text-sm font-medium">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="************"
        className="input"
        required
        onChange={handleChange}
      />
      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="btn w-[32%] h-10 text-center font-medium hover:scale-105"
        >
          {/* render loading anamiation if is loading */}
          {loading ? (
            <div className="flex items-center justify-center gap-3">
              <div className="animate-spin">
                <ImSpinner8 />
              </div>
              Loading...
            </div>
          ) : (
            <p>Register</p>
          )}
        </button>
      </div>
    </form>
  );
}

export default register;
