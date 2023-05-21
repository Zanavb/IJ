import React from "react";
import Logo from "../assets/LOGO/LOGO.png";





const Header = () => {
    let Links = [
        {name:"Producties",link: "/Producties.js"},
        {name:"Over Ons",link: "/OverOns.js"},
        {name:"Reservaties",link: "/Reservaties.js"},
        {name:"Praktisch",link: "/Praktisch.js"},
        {name:"Contact",link: "/Contact.js"}
    ]

    return (
        <header className="">
        <div className="container mx-auto max-w-6xl">
            <div className="flex justify-between items-center">
                <img className="h-44" src={Logo} alt="Iverighe Jonckheyt" />
                <div>
                    <ul className="text-sky-700 font-bold md:flex justify-between md:items-center mx-4">
                        {
                            Links.map((link) => (
                                <li key={link.name} className="md:ml-8 text-xl">
                                    <a href={link.link} className="hover:text-orange-500 duration-300">{link.name}</a>
                                </li>
                            ))
                        }
                        <Button/>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    )
    
};

export default Header;