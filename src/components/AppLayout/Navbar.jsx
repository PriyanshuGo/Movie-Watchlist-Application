import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Moives", href: "/movies" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"></div>
      )}
      <nav
        className={`bg-black text-white rounded-full my-2 m-4 flex items-center ${
          isOpen ? "z-20 relative" : ""
        }`}
      >
        <div className="container flex items-center justify-between py-2 md:mx-20">
          <a href="#" className="logo ml-10 h-11 flex items-center">
            NEXTZONE
          </a>

          <button
            className="text-white text-2xl mr-4 lg:hidden h-11"
            onClick={handleMenu}
          >
            <Menu />
          </button>

          <ul className="hidden lg:flex lg:flex-row lg:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink to={link.href}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div
        className={`absolute left-0 right-0 bg-black text-white rounded-2xl mx-4 flex flex-col ${
          isOpen ? "py-6 z-40" : "opacity-0 invisible"
        } transition-all duration-300 ease-in-out lg:hidden`}
      >
        <ul className="space-y-4 mx-8 text-lg font-semibold">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-teal-400 font-bold" : "text-white"
                }
                to={link.href}
                onClick={() => {
                  setTimeout(() => setIsOpen(false), 100);  // This directly sets isOpen to false
                }}
                
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
