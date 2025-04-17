import React, { useContext, useRef, useState } from "react";
import { AdminData } from "../../context/Context";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { IoMdCloudUpload } from "react-icons/io";
import EditCategories from "./EditCategories";
import logo from "../../assets/logoDark2.png";


function Categories() {
  const fileInputRef = useRef(null);
  const { categories, modal, setModal, setCategories } = useContext(AdminData);
  const [categorySelect, setCategorySelect] = useState("");

  //data state
  const [category, setCategory] = useState({
    name: "",
    image: "",
  });

  //sent data
  const handelDataSent = () => {
    setCategories([...categories, { ...category, id: Date.now() }]);
    setCategory({
      name: "",
      image: "",
    });
    console.log(categories);
  };

  //handel edit
  const handelEdit = (item) => {
    setCategorySelect(item);
    setModal(true);
  };

  //handel delete
  const handelDelelte = (id) => {
    const updateCategories = categories.filter((item) => item.id !== id);
    setCategories(updateCategories);
  };

  return (
    <>
      <div className="flex flex-row flex-wrap gap-10">
        {modal ? <EditCategories category={categorySelect} /> : null}
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
              Add Category
            </button>
          </div>
        </div>
        <div className=" md:overflow-hidden overflow-x-scroll">
          <table className="text-left text-sm text-gray-700 border border-gray-200">
            <caption className="text-2xl font-bold my-10 text-start">
              All categories
            </caption>
            <thead className="bg-gray-100 text-xs uppercase text-gray-500">
              <tr>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Products</th>
                <th className="px-4 py-3">Options</th>
              </tr>
            </thead>
            <tbody className=" divide-y divide-gray-200 bg-white">
              {categories.length > 0 ? (
                categories.map((category) => (
                  <tr key={category.id}>
                    <td className="px-4 py-3">
                      <img
                        src={category.image ? category.image : logo}
                        alt="product image"
                        height="50px"
                        width="50px"
                      />
                    </td>
                    <td className="px-4 py-3">{category.name}</td>
                    <td className="px-4 py-3">
                      {category.items ? category.items : 0}
                    </td>
                    <td>
                      <div className="flex justify-start items-center gap-3 p-2">
                        <button
                          className="flex justify-between items-center gap-1 p-2 rounded bg-green-500 text-white cursor-pointer"
                          onClick={() => handelEdit(category)}
                        >
                          <MdEdit />
                          Edite
                        </button>
                        <button
                          className="flex justify-between items-center gap-1 p-2 rounded bg-red-500 text-white cursor-pointer"
                          onClick={() => handelDelelte(category.id)}
                        >
                          <MdDeleteForever />
                          Delelt
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="text-center text-2xl py-4" colSpan="8">
                    No categories available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Categories;
