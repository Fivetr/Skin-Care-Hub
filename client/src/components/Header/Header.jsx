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
import { HiMiniSquares2X2 } from "react-icons/hi2";
import logo from "../../assets/logo.jpg";

function Header({ pageBG }) {
  const [Open, setOpen] = useState(false);
  const user = useSelector((state) => state.user.exist);
  const currentUser = useSelector((state) => state.user.user);
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
      <div className="tw-h-14 tw-py-2 tw-px-5 tw-flex tw-justify-between tw-border-b tw-bg-[#eae6aded]">
        <div className="tw-text-green-50 tw-flex tw-items-center tw-justify-center">
          <Link to="/">
            <img
              src={logo}
              className="tw-w-[3.5rem] tw-h-[3.5rem] tw-bg-white tw-relative tw--left-5"
            />
          </Link>
          <span className="tw-font-extrabold tw-text-center tw-text-xl tw-text-black">
            Hi {currentUser.username}
          </span>
        </div>
        <button
          className="sm:tw-hidden hover:tw-scale-110 tw-duration-700"
          onClick={() => setOpen(!Open)}
        >
          {Open ? (
            <AiFillCloseSquare className="tw-w-[1.3rem] tw-h-[1.3rem]" />
          ) : (
            <FaBars className="tw-w-[1.3rem] tw-h-[1.3rem]" />
          )}
        </button>
        <nav className="tw-hidden sm:tw-block tw-items-center">
          <ul className="tw-flex tw-items-center tw-gap-6 tw-justify-between tw-h-full">
            <li className="tw-p-2 tw-cursor-pointer hover:tw-scale-125 tw-duration-700">
              <Link to="/search" className="tw-text-black ">
                <HiMiniSquares2X2 className="tw-w-[1.3rem] tw-h-[1.3rem]" />
              </Link>
            </li>
            <li className="tw-p-2 tw-cursor-pointer hover:tw-scale-125 tw-duration-700">
              {user ? (
                <Link to={`/mycart/${currentUser._id}`} className="tw-text-black">
                  <FaCartShopping className="tw-w-[1.3rem] tw-h-[1.3rem]" />
                </Link>
              ) : (
                <button
                  onClick={() => toast.error("PLEASES LOGIN FIRST")}
                  className="tw-flex tw-items-center"
                >
                  <FaCartShopping className="tw-w-[1.3rem] tw-h-[1.3rem]" />
                </button>
              )}
            </li>
            <li className="tw-p-2 tw-cursor-pointer hover:tw-scale-125 tw-duration-700">
              {user ? (
                <Link to="/" className="tw-text-black">
                  <FaRegNewspaper className="tw-w-[1.3rem] tw-h-[1.3rem]" />
                </Link>
              ) : (
                <button
                  onClick={() => toast.error("PLS LOGIN FIRST")}
                  className="tw-flex tw-items-center"
                >
                  <FaRegNewspaper className="tw-w-[1.3rem] tw-h-[1.3rem]" />
                </button>
              )}
            </li>
            <li className="tw-p-2 tw-cursor-pointer hover:tw-scale-125 tw-duration-700">
              {user ? (
                <button onClick={handleLogout}>
                  <FiLogOut className="tw-w-[1.3rem] tw-h-[1.3rem]" />
                </button>
              ) : (
                <Link to="/auth" className="tw-text-black">
                  <FiLogIn className="tw-w-[1.3rem] tw-h-[1.3rem]" />
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <div className={`${pageBG}`}>
        <Transition
          show={Open}
          enter="tw-transition tw-ease-out tw-duration-700 tw-transform"
          enterFrom="tw--translate-y-full tw-opacity-0"
          enterTo="tw-translate-y-0 tw-opacity-100"
          leave="tw-transition tw-ease-in tw-duration-500 tw-transform"
          leaveFrom="tw-translate-y-0 tw-opacity-100"
          leaveTo="tw--translate-y-full tw-opacity-0"
          className="tw-pt-4 "
        >
          <nav className="tw-mx-auto tw-w-[18rem] tw-rounded-lg tw-border-gray-200">
            <ul>
              <Link to="/auth" className="tw-text-black tw-no-underline">
                <li className="tw-flex tw-gap-2 tw-items-center tw-justify-start tw-pl-5 tw-p-2 tw-cursor-pointer hover:tw-bg-gray-400 tw-bg-gradient-to-r tw-from-green-300 tw-to-blue-300 hover:tw-from-sky-300 hover:tw-to-teal-300 tw-font-bold tw-border-b tw-border-gray-200 tw-rounded-t-lg">
                  Login
                  <FiLogIn />
                </li>
              </Link>
              <Link to="/search" className="tw-text-black tw-no-underline">
                <li className="tw-flex tw-gap-2 tw-items-center tw-justify-start tw-pl-5 tw-p-2 tw-cursor-pointer hover:tw-bg-gray-400 tw-bg-gradient-to-r tw-from-green-300 tw-to-blue-300 hover:tw-from-sky-300 hover:tw-to-teal-300 tw-font-bold tw-border-b tw-border-gay-200">
                  Products
                  <HiMiniSquares2X2 />
                </li>
              </Link>
              <li className="tw-flex tw-gap-2 tw-items-center tw-justify-start tw-pl-5 tw-p-2 tw-cursor-pointer hover:tw-bg-gray-400 tw-bg-gradient-to-r tw-from-green-300 tw-to-blue-300 hover:tw-from-sky-300 hover:tw-to-teal-300 tw-font-bold tw-border-b tw-border-gay-200">
                Cart <FaCartShopping />
              </li>
              <li className="tw-flex tw-gap-2 tw-items-center tw-justify-start tw-pl-5 tw-p-2 tw-cursor-pointer hover:tw-bg-gray-400 tw-bg-gradient-to-r tw-from-green-300 tw-to-blue-300 hover:tw-from-sky-300 hover:tw-to-teal-300 tw-font-bold tw-rounded-b-lg ">
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
