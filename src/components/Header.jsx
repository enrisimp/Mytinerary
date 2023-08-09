import React, { useState } from 'react';

const ResponsiveNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuItems = [
    { label: 'Home', path: '/', id: '1', active: true },
    { label: 'Cities', path: '/cities', id: '2', active: false },
    // Add more menu items as needed
  ];

  return (
    <nav className="bg-gray-900 py-4">
      <div className="container mx-auto px-4 lg:flex lg:justify-between lg:items-center">
        <div className="flex items-center">
          <div className="text-white text-2xl font-semibold overflow-wrap">
            My Tinerary
          </div>
        </div>
        {/* Hamburger menu for smaller screens */}
        <div className="lg:hidden text-center">
          <div
            className="cursor-pointer text-white text-3xl ml-auto"
            onClick={() => setShowMenu(!showMenu)}
          >
            ☰
          </div>
        </div>
        {/* Links for larger screens */}
        <div className={`lg:flex ${showMenu ? 'flex' : 'hidden'} mt-4 lg:mt-0`}>
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.path}
              className={`block text-white font-semibold text-lg px-4 py-2 lg:mt-0 lg:ml-4 ${
                item.active ? 'text-indigo-600' : 'hover:text-indigo-600'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="block text-white font-semibold text-lg px-4 py-2 lg:mt-0 lg:ml-4">
            Login
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;