import React from "react";

function SwitchButton(Props) {
  return (
    <div
      className={` w-10 h-5 rounded-full relative cursor-pointer ${
        Props.status ? "bg-fuchsia-500" : "bg-gray-300"
      }`}
      onClick={Props.toggle}
    >
      <span
        className={`bg-fuchsia-50 w-5 h-5 rounded-full absolute top-0 ${
          Props.status ? "right-0" : "left-0"
        }`}
      ></span>
    </div>
  );
}

export default SwitchButton;
