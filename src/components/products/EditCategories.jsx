import React, { useContext, useRef, useState } from "react";
import Modal from "../Modal";
import { IoMdCloudUpload } from "react-icons/io";
import { AdminData } from "../../context/Context";

function EditCategories(Props) {
  const fileInputRef = useRef(null);
  const { categories, setCategories, setModal } = useContext(AdminData);
  const [category, setCategory] = useState(Props.category);

  const handelDataSent = () => {
    const updateCategory = categories.map((item) => {
      if (item.id === category.id) {
        return {
          ...item,
          name: category.name,
          image: category.image,
        };
      }
      return item;
    });

    setCategories(updateCategory);
    setModal(false);
  };
  return (
    <Modal>
      <div className=" grow">
        <h3 className="text-2xl font-bold my-10 text-start text-gray-700">
          Add new category
        </h3>
        <div className="flex flex-col justify-start  gap-4 p-5 bg-white rounded">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              className="border border-fuchsia-500 p-1 rounded"
              type="text"
              value={category.name}
              onChange={(e) =>
                setCategory({ ...category, name: e.target.value })
              }
              required
            />
          </div>
          <div className="flex flex-col gap-2 justify-start">
            <label htmlFor="image">Select image</label>
            <input
              className=" hidden"
              ref={fileInputRef}
              name="image"
              type="file"
              accept="image/jpeg, image/png"
              onChange={(e) => {
                setCategory({ ...category, image: e.target.files });
              }}
            />
            <div
              className="p-5 border border-gray-500 bg-gray-100 text-gray-500 rounded text-6xl cursor-pointer self-start"
              onClick={() => {
                fileInputRef.current.click();
              }}
            >
              <IoMdCloudUpload />
            </div>
          </div>
          <button
            className="bg-fuchsia-500 text-white rounded px-3 py-2 font-medium cursor-pointer self-start hover:bg-fuchsia-400"
            onClick={handelDataSent}
          >
            Save changes
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default EditCategories;
