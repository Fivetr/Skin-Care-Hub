import React, { useState } from "react";
import { ImSpinner8 } from "react-icons/im";
import { RiArrowGoBackLine } from "react-icons/ri";
import { toast } from "react-toastify";

function register({ setAuthMenu }) {
  const [password_error, setpassword_error] = useState(false);
  const [loading, setloading] = useState(false);
  const [UserInput, setUserInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(UserInput),
      });
      if (!response.ok) {
        const response_data = await response.json();
        switch (response_data.msg) {
          case "password: wrong format":
            toast.error("PASSWORD FORMAT IS INVALID");
            setpassword_error(true);
            break;
          case "email: wrong format":
            toast.error("EMAIL IS INVALID");
            break;
          case "username or email already exists":
            toast.error("USERNAME OR EMAIL ALREADY EXISTS");
            break;
          default:
            toast.error("Invalid Email or Password");
        }
        setloading(false);
        return;
      }
      const data = await response.json();
      toast.success(data.msg);
      setloading(false);
      setAuthMenu(true);
    } catch (e) {
      console.log(e);
    }
  };
  const handleChange = (e) => {
    setUserInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
        User Name
      </label>
      <input
        type="text"
        id="username"
        name="username"
        className="input"
        required
        onChange={handleChange}
      />
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
      {password_error ? (
        <p className="text-sm text-red-600">
          A password must contain at least 12 characters, with at least 1
          digits, 1 lower case letter, 1 upper case letter and 1 special
          character.
        </p>
      ) : null}
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
