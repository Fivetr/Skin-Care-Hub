import React, { useState } from "react";
import { ImSpinner8 } from "react-icons/im";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/auth/userSlice";
import { useNavigate } from "react-router-dom";

function sign({ setAuthMenu }) {
  const [loading, setloading] = useState(false);
  const [UserInput, setUserInput] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(UserInput),
      });
      if (!response.ok) {
        const response_data = await response.json();
        console.log(response_data.msg);
        switch (response_data.msg) {
          case "email not found":
            toast.error("NO SUCH EMAIL FOUND");
            break;
          case "wrong password":
            toast.error("INVALID PASSWORD");
            break;
          default:
            toast.error("Invalid Email or Password");
        }
        setloading(false);
        return;
      }
      const data = await response.json();
      dispatch(setUser());
      setloading(false);
      navigate("/");
      toast.success("LOGIN SUCCESSFUL !!!");
    } catch (e) {}
  };
  const handleChange = (e) => {
    setUserInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
