import React from "react";
import Logo from "../assets/LOGO/LOGO.png";
import { useState } from "react";

const Header = () => {
  let Links = [
    { name: "Producties", link: "/Producties.js" },
    { name: "Over Ons", link: "/OverOns.js" },
    { name: "Reservaties", link: "/Reservaties.js" },
    { name: "Praktisch", link: "/Praktisch.js" },
    { name: "Contact", link: "/Contact.js" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <header className="">
      <div className="mx-auto max-w-6xl bg-white">
        <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
          <div className="flex items-center">
            <img
              className="h-44 cursor-pointer"
              src={Logo}
              alt="Iverighe Jonckheyt"
            />
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 md:hidden"
            name={open ? "close" : "menu"}
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <ul
            className={`text-sky-700 font-bold md:flex md:items-center md:pb-0 pt-32 md:pt-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in  ${
              open ? "top-20 opacity-100" : "top-[-490px]"
            } md:opacity-100 opacity-0`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-8">
                <a
                  href={link.link}
                  className="hover:text-orange-500 duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
