import React, { useContext } from "react";
import SideBareItem from "./SideBareItem";
import { MdDashboard } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { GoPackage } from "react-icons/go";
import { FiEdit } from "react-icons/fi";
import { MdEditNote } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { AdminData } from "../context/Context";
import logo from "../assets/logoDark.png";
import logo2 from "../assets/logoDark2.png";

function SideBare() {
  const { sideBareOpen, setSideBareOpen, setViewSubMenu } =
    useContext(AdminData);
  return (
    <>
      <div className=" bg-gray-900  min-h-[100%]">
        <div
          className={`flex flex-col justify-between text-white bg-gray-900 gap-10 px-5 py-10 transition-all duration-300 relative ${
            sideBareOpen ? "md:min-w-[300px]" : null
          }`}
        >
          <div
            className=" absolute font-bold text-3xl right-[-10px] bg-gray-900 rounded-3xl cursor-pointer"
            onClick={() => {
              setSideBareOpen(!sideBareOpen);
              if (sideBareOpen) {
                setViewSubMenu("");
              }
            }}
          >
            {sideBareOpen ? (
              <FaArrowAltCircleLeft />
            ) : (
              <FaArrowAltCircleRight />
            )}
          </div>
          <div className="flex justify-center items-center">
            {sideBareOpen ? (
              <img src={logo} alt="logo" width="150px" />
            ) : (
              <img src={logo2} alt="logo" width="50px" />
            )}
          </div>
          <div className="flex flex-col gap-5">
            <SideBareItem name="Dashboard" icon={<MdDashboard />} element="home"/>
            <SideBareItem
              name="Products"
              subMenu={["All products", "Add new product", "Categories"]}
              icon={<AiFillProduct />}
            />
            <SideBareItem
              name="Orders"
              subMenu={["All orders", "Add new order"]}
              icon={<GoPackage />}
            />
            <SideBareItem
              name="Pages"
              subMenu={["All pages", "Add new page"]}
              icon={<FiEdit />}
            />
            <SideBareItem
              name="Posts"
              subMenu={["All posts", "Add new post"]}
              icon={<MdEditNote />}
            />
            <SideBareItem
              name="Users"
              subMenu={["All users", "Add new user"]}
              icon={<FaRegUserCircle />}
            />
            <SideBareItem
              name="Settings"
              subMenu={["Profile", "Others"]}
              icon={<IoSettingsOutline />}
            />
          </div>
          <div className="flex gap-4 justify-start items-center py-5">
            {sideBareOpen ? <p className="font-medium">Logout</p> : null}
            <div className="text-3xl">
              <MdLogout />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBare;
