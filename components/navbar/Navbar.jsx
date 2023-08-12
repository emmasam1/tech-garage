"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import DarkModeToggle from "@/components/mode/ModeToggle";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  // const mode = localStorage.getItem('mode')
  // ${mode ? 'dark' : 'light'}

  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Courses",
      url: "/",
    },
    {
      id: 3,
      title: "About",
      url: "/",
    },
    {
      id: 4,
      title: "Contact",
      url: "/",
    },
    {
      id: 5,
      title: "Services",
      url: "/",
    },
  ];

  return (
    <div className="w-full h-20 fixed z-50 top-0 flex justify-center bg-inherit">
        <div className="container flex justify-between items-center w-11/12 h-20 fixed">
        <div>
          <Image src='/logo.png' alt="logo" width={100} height={10} />
          {/* <h1 className="text-5xl font-signature">Samzy</h1> */}
        </div>
        <ul className="hidden md:flex">
          <DarkModeToggle />
          {links.map((link) => (
            <li key={link.id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
              <Link  href={link.url}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        {/* MOBILE MENUE */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
             {links.map((link) => (
            <li key={link.id} className="px-4 cursor-pointer capitalize py-6 text-3xl">
              <Link  href={link.url}>
                {link.title}
              </Link>
            </li>
          ))}
            {/* {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-3xl"
              >
                <Link onClick={() => setNav(!nav)} href={link}>
                  {link}
                </Link>
              </li>
            ))} */}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
