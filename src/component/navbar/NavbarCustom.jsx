import React, { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "FAQ",
    path: "/faq",
  },
  {
    id: 6,
    name: "Contact",
    path: "/contact",
  },
];

const NavbarCustom = () => {
  const [open, setOpen] = useState(false);
  const links = navLinks.map((route) => (
    <li key={route.id} className="py-2 md:py-0 md:mr-6">
      <a href={route.path} className="hover:text-blue-500 transition-colors">
        {route.name}
      </a>
    </li>
  ));
  return (
    <nav className=" shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 md:px-8 py-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex items-center"
            aria-label="Toggle menu"
          >
            {open ? (
              <X className="w-6 h-6"></X>
            ) : (
              <Menu className="w-6 h-6"></Menu>
            )}
          </button>
          <h1 className="text-lg md:text-2xl font-bold">Navbar</h1>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`absolute left-0 right-0 top-full flex flex-col md:hidden transition-all duration-300 overflow-hidden ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {links}
        </ul>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-2">{links}</ul>
        <h1 className="text-sm md:text-base cursor-pointer hover:text-blue-500 transition-colors">
          Login
        </h1>
      </div>
    </nav>
  );
};

export default NavbarCustom;
