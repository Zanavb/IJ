import React from "react";

const Button = (props) => {
  return (
    <div className="bg-indigo-400 text-white py-2 px-6 rounded md:ml-8 hover:bg-gray-300 duration-200">
      <button>{props.children}</button>
    </div>
  );
};

export default Button;
