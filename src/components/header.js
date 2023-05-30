import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/LOGO/LOGO.png";

const Header = () => {
  const Links = [
    { name: "Producties", link: "/Producties" },
    { name: "Reservaties", link: "/Reservaties" },
    { name: "Over Ons", link: "/OverOns" },
    { name: "Praktisch", link: "/Praktisch" },
    { name: "Contact", link: "/Contact" },
  ];

  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname); // Update initial value

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const [open, setOpen] = useState(false);

  return (
    <header className="">
      <div className="mx-auto max-w-6xl bg-white">
        <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
          <div className="flex items-center flex-none">
            <Link to={"/"}>
              <img
                className="h-44 cursor-pointer"
                src={Logo}
                alt="Iverighe Jonckheyt"
              />
            </Link>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 md:hidden"
            name={open ? "close" : "menu"}
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <ul
            className={`text-sky-700  font-bold md:flex md:items-center md:pb-0 mt-32 md:mt-0 pb-12 absolute md:static bg-white md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in ${
              open ? "top-20 opacity-100" : "top-[-490px]"
            } md:opacity-100 opacity-0`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-8">
                <Link to={link.link}>
                  <a
                    href={link.link}
                    className={`hover:text-orange-500 duration-300 ${
                      activeLink === link.link || activeLink === link.name
                        ? "text-orange-500"
                        : ""
                    }`}
                    onClick={() => setActiveLink(link.link)}
                  >
                    {link.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
