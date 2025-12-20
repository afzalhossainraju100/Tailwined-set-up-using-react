import React from "react";
import { Menu } from "lucide-react";
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
  return (
    <nav>
      <div className="flex justify-between items-center p-4">
        <span className="flex gap-4">
          <Menu className="md:hidden"></Menu>
          <h1>Navbar</h1>
        </span>
        <ul className="flex">
          {navLinks.map((route) => (
            <li key={route.id} className="mr-10">
              <a href={route.path}>{route.name}</a>
            </li>
          ))}
        </ul>
        <h1>Login</h1>
      </div>
    </nav>
  );
};

export default NavbarCustom;
