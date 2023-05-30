import React from "react";
import Logo from "../assets/LOGO/LOGO_LIGGEND.png";

const home = () => {
  return (
    <div className="container max-w-3xl mx-auto">
      <div className="text-center text-4xl text-sky-700 font-Rubik font-extrabold pb-10">
        <h1>WELKOM BIJ</h1>
      </div>
      <div>
        <img src={Logo} alt="" />
      </div>
      <div className="text-center text-4xl text-sky-700 font-Rubik font-extrabold pt-10"></div>
    </div>
  );
};

export default home;
