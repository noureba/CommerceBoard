import React, { useContext } from "react";
import { AdminData } from "../context/Context";
import { FaAngleDown } from "react-icons/fa";

function SideBareItem(Props) {
  const {
    sideBareOpen,
    setSideBareOpen,
    viewSubMenu,
    setViewSubMenu,
    setView,
  } = useContext(AdminData);

  return (
    <>
      <div>
        <div
          className={`flex justify-between items-center p-2 hover:bg-gray-800 cursor-pointer transition-all duration-300 ${
            !sideBareOpen ? "rounded-2xl" : null
          }`}
          onClick={() =>
            Props.subMenu && viewSubMenu !== Props.name
              ? setViewSubMenu(Props.name)
              : setViewSubMenu("")
          }
        >
          <div
            className="text-3xl"
            onClick={() => (Props.subMenu ? setSideBareOpen(true) : null)}
          >
            {Props.icon}
          </div>
          {sideBareOpen ? (
            <div className="">
              <h3 className=" font-medium">{Props.name}</h3>
            </div>
          ) : null}
          {sideBareOpen ? (
            <div className="cursor-pointer">
              {Props.subMenu ? (
                <FaAngleDown onClick={() => setViewSubMenu(!viewSubMenu)} />
              ) : null}
            </div>
          ) : null}
        </div>
        <div
          className={`bg-gray-700 flex flex-col gap-5 overflow-hidden transition-all duration-300   ${
            Props.name === viewSubMenu ? "h-[auto] p-2 block" : "h-[0px] w-0 "
          }`}
        >
          {Props.subMenu
            ? Props.subMenu.map((item, index) => (
                <p
                  className=" cursor-pointer hover:text-cyan-500 transition-all duration-300"
                  key={index}
                  onClick={() => {
                    Props.subMenu ? setView(item) : setView("home");
                  }}
                >
                  {item}
                </p>
              ))
            : null}
        </div>
      </div>
    </>
  );
}

export default SideBareItem;
