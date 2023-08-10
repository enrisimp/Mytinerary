import React, { useState } from 'react';
import logoBlue from '../../public/logoBlue.png';
import { UserIcon } from '@heroicons/react/24/solid';

/**
 * Header is a React component that renders a responsive navigation bar.
 * It includes a logo, a menu with links, and a login button.
 * The menu can be toggled on smaller screens by clicking on a hamburger icon.
 */
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuItems = [
    { label: "Home", path: "/", id: "1", active: true },
    { label: "Cities", path: "/cities", id: "2", active: false },
  ];

  /**
   * Toggles the visibility of the menu items.
   */
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

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
        {/* Hamburger menu for smaller screens */}
        <div className="lg:hidden text-center ml-auto">
          <div
            className="cursor-pointer text-white text-3xl"
            onClick={toggleMenu}
          >
            ☰
          </div>
        </div>
        {/* Links for larger screens */}
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
          <a
            href="#"
            className="block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg px-4 py-2 lg:mt-0 lg:ml-4 rounded-lg flex items-center"
          >
            <UserIcon className="w-6 h-6 mr-2" /> Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;