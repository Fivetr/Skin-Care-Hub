import React, { useState } from "react";
import { ImSpinner8 } from "react-icons/im";

function sign({ setAuthMenu }) {
  const [loading, setloading] = useState(false);
  const [UserInput, setUserInput] = useState({ email: "", password: "" });
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
      <h1 className="text-2xl font-medium">Login</h1>

      <label htmlFor="email" className="mb-2 block text-sm font-medium">
        Email
      </label>
      <input
        type="text"
        id="email"
        name="email"
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
      <div className="flex justify-evenly">
        <button className="btn w-[30%]" onClick={() => setAuthMenu(false)}>
          Register
        </button>
        <button
          type="submit"
          className="btn w-[30%] text-center font-medium hover:scale-105"
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
            <p>Login</p>
          )}
        </button>
      </div>
    </form>
  );
}

export default sign;
