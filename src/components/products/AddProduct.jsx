import React, { useContext, useRef, useState } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { AdminData } from "../../context/Context";

function AddProduct() {
  const fileInputRef = useRef(null);
  const { categories } = useContext(AdminData);

  const [product, setProduct] = useState({
    name: "",
    desc: "",
    category: "",
    price: "",
    salePrice: "",
    stock: "",
    image: "",
  });


  // sent data
  const handelDataSent = () => {};

  return (
    <>
      <div className="">
        <h3 className="text-2xl font-bold my-10 text-start text-gray-700">
          Add new Product
        </h3>
        <div className="flex flex-col justify-start  gap-4 p-5 bg-white rounded">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              className="border border-fuchsia-500 p-1 rounded"
              type="text"
              value={product.name}
              name="name"
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="desc">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              className="border border-fuchsia-500 p-1 rounded"
              type="text"
              value={product.desc}
              name="desc"
              onChange={(e) => setProduct({ ...product, desc: e.target.value })}
              required
            />
          </div>

          <div className="flex md:flex-row flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="stock">
                Stock <span className="text-red-500">*</span>
              </label>
              <input
                className="border border-fuchsia-500 p-1 rounded"
                type="number"
                value={product.stock}
                name="stock"
                onChange={(e) =>
                  setProduct({ ...product, stock: e.target.value })
                }
                min="1"
                max="100"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="price">
                Price <span className="text-red-500">*</span>
              </label>
              <input
                className="border border-fuchsia-500 p-1 rounded"
                type="number"
                value={product.price}
                name="price"
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="salePrice">
                Sale price <span className="text-red-500"></span>
              </label>
              <input
                className="border border-fuchsia-500 p-1 rounded"
                type="number"
                value={product.salePrice}
                name="salePrice"
                onChange={(e) =>
                  setProduct({ ...product, salePrice: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="category">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                name="category"
                className="border border-fuchsia-500 p-1 rounded outline-fuchsia-500"
                value={product.category}
                onChange={(e) =>
                  setProduct({ ...product, category: e.target.value })
                }
              >
                {categories.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
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
                setProduct({ ...product, image: e.target.files });
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
            Add Product
          </button>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
