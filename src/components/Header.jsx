import React, { useState } from "react";
import logoBlue from "/logoBlue.png";
import { useNavigate, Link } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/solid";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/userActions";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();

  const menuItems = [
    { label: "Home", path: "/", id: "1", active: true },
    { label: "Cities", path: "/cities", id: "2", active: false },
  ];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // const handleCitiesClick = () => {
  //   navigate("/cities");
  // };

  return (
    <nav className="bg-blue-900 bg-opacity-90 py-4">
      <div className="container mx-auto px-4 lg:flex lg:justify-between lg:items-center">
        <div className="flex items-center">
          <img
            src={logoBlue}
            alt="My Tinerary Logo"
            className="w-10 h-10 mr-2"
          />
          <div
            className={`text-white text-2xl font-semibold overflow-wrap ${
              showMenu ? "mx-auto" : ""
            }`}
          >
            My Tinerary
          </div>
        </div>
        <div className="lg:hidden text-center ml-auto">
          <div
            className="cursor-pointer text-white text-3xl"
            onClick={toggleMenu}
          >
            ☰
          </div>
        </div>
        <div
          className={`lg:flex ${
            showMenu ? "flex" : "hidden"
          } mt-4 lg:mt-0 w-full lg:w-auto`}
        >
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.path}
              className={`block text-white font-semibold text-lg px-4 py-2 lg:mt-0 lg:ml-4 ${
                item.active ? "text-indigo-600" : "hover:text-indigo-600"
              }`}
            >
              {item.label}
            </a>
          ))}
          {user ? (
            <button
              onClick={() => dispatch(logout())}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg px-4 py-2 lg:mt-0 lg:ml-4 rounded-lg flex items-center"
            >
              <img
                src={user.image}
                alt="User Image"
                className="w-6 h-6 mr-2 rounded-full"
              />{" "}
              Log Out
            </button>
          ) : (
            <>
              <Link
                to="/signup"
                className="text-white font-semibold text-lg px-4 py-2 lg:mt-0 lg:ml-4 rounded-lg flex items-center"
              >
                Sign UP
              </Link>
              <button
                onClick={() => navigate("/signin")}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg px-4 py-2 lg:mt-0 lg:ml-4 rounded-lg flex items-center"
              >
                <UserIcon className="w-6 h-6 mr-2" /> Login
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
