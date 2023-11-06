import React from "react";
import { FaBars } from "react-icons/fa";
import { AiFillCloseSquare } from "react-icons/ai";
import { FaCartShopping, FaRegNewspaper } from "react-icons/fa6";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { offsetUser } from "../../redux/features/auth/userSlice";
import { useNavigate } from "react-router-dom";

function Header({ pageBG }) {
  const [Open, setOpen] = useState(false);
  const user = useSelector((state) => state.user.exist);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "GET",
        credentials: "same-origin",
      });
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch(offsetUser());
        navigate("/");
        toast.success("LOGGED OUT");
      } else {
        console.error("Logout failed");
      }
    } catch (e) {
      console.error("Error logging out:", e);
    }
  };
  return (
    <>
      <div className="h-10 border-b py-2 px-5 border-gray-200 flex justify-between items-center bg-gradient-to-tl from-cyan-100  to-cyan-200">
        <div className="">
          <Link to="/">Logo</Link>
        </div>
        <div>search component</div>
        <button
          className="sm:hidden hover:scale-110 duration-700"
          onClick={() => setOpen(!Open)}
        >
          {Open ? <AiFillCloseSquare /> : <FaBars />}
        </button>
        <nav className="hidden sm:block">
          <ul className="flex items-center gap-6">
            <li className="p-2 cursor-pointer hover:scale-125 duration-700">
              {user ? (
                <Link to="/">
                  <FaCartShopping />
                </Link>
              ) : (
                <button
                  onClick={() => toast.error("PLEASES LOGIN FIRST")}
                  className="flex items-center"
                >
                  <FaCartShopping />
                </button>
              )}
            </li>
            <li className="p-2 cursor-pointer hover:scale-125 duration-700">
              {user ? (
                <Link to="/">
                  <FaRegNewspaper />
                </Link>
              ) : (
                <button
                  onClick={() => toast.error("PLS LOGIN FIRST")}
                  className="flex items-center"
                >
                  <FaRegNewspaper />
                </button>
              )}
            </li>
            <li className="p-2 cursor-pointer hover:scale-125 duration-700">
              {user ? (
                <button onClick={handleLogout}>
                  <FiLogOut />
                </button>
              ) : (
                <Link to="/auth">
                  <FiLogIn />
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <div className={`${pageBG}`}>
        <Transition
          show={Open}
          enter="transition ease-out duration-700 transform"
          enterFrom="-translate-y-full opacity-0"
          enterTo="translate-y-0 opacity-100"
          leave="transition ease-in duration-500 transform"
          leaveFrom="translate-y-0 opacity-100"
          leaveTo="-translate-y-full opacity-0"
          className="pt-4 "
        >
          <nav className="mx-auto w-[18rem] border rounded-lg border-gray-200">
            <ul>
              <Link to="/auth">
                <li className="nav-items border-b border-gray-200 rounded-t-lg">
                  Login
                  <FiLogIn />
                </li>
              </Link>
              <li className="nav-items border-b border-gay-200">
                Cart <FaCartShopping />
              </li>
              <li className="nav-items rounded-b-lg ">
                Orders <FaRegNewspaper />
              </li>
            </ul>
          </nav>
        </Transition>
      </div>
    </>
  );
}

export default Header;
