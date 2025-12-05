import React from 'react';
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
        <ul className='flex'>
          {
            navLinks.map(route => <li key={route.id} className='mr-10'><a href={route.path}>{route.name}</a></li>)
          }
        </ul>
      </nav>
    );
};

export default NavbarCustom;