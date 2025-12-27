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
    <li key={route.id} className="mr-10">
      <a href={route.path}>{route.name}</a>
    </li>
  ));
  return (
    <nav>
      <div className="flex justify-between items-center p-4">
        <span className="flex gap-4" onClick={() => setOpen(!open)}>
          {open ? (
            <X className="md:hidden"></X>
          ) : (
            <Menu className="md:hidden"></Menu>
          )}
          <ul className={`md:hidden absolute duration-1000 ${open? 'top-30':'-top-40'}`}>{links}</ul>
          <h1>Navbar</h1>
        </span>
        <ul className="md:flex hidden">{links}</ul>
        <h1>Login</h1>
      </div>
    </nav>
  );
};

export default NavbarCustom;
