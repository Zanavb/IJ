import React from "react";
import { BsInstagram, BsFacebook } from "react-icons/bs";

const footer = () => {
  return (
    <div className="bg-orange-500 relative w-screen bottom-0 text-center p-5">
      <div className="">
        <p>
          © 1900 Rederijkerskamer Iverige Jonckheyt - Camere van Rhetorica -
          Sint-Amandsberg - Koninklijke toneelvereniging In Trouw Verbond
        </p>
        <a
          className="text-sky-700 hover:underline duration-200"
          href="mailto:info@iverigejonckheyt.be"
        >
          info@iverigejonckheyt.be
        </a>
        <div className="flex justify-center text-lg">
          <a
            className="mx-4 mt-2 hover:text-sky-700 duration-200"
            href="https://www.instagram.com/iverigejonckheyt/"
            target="blank"
          >
            <BsInstagram size={25} />
          </a>
          <a
            className="mx-4 mt-2 hover:text-sky-700 duration-200"
            href="https://www.facebook.com/iverigejonckheyt"
            target="blank"
          >
            <BsFacebook size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default footer;
