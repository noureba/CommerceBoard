import React, { useContext } from "react";
import { AdminData } from "../context/Context";
import { IoIosCloseCircleOutline } from "react-icons/io";

function Modal({ children }) {
  const { setModal } = useContext(AdminData);

  return (
    <div className=" fixed inset-0 justify-center items-center z-40">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={() => setModal(false)}
      ></div>
      <div className="bg-white rounded-lg shadow-lg z-50 p-6 w-11/12 max-w-md absolute max-h-[80%] overflow-hidden overflow-y-scroll top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <button
          className=" absolute top-3 right-3 text-3xl text-red-500 border-0 bg-none cursor-pointer"
          onClick={() => setModal(false)}
        >
          <IoIosCloseCircleOutline />
        </button>
        <div className=" ">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
