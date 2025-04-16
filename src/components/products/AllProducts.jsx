import React, { useContext, useState } from "react";
import { AdminData } from "../../context/Context";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import EditProductModal from "./EditProductModal";

function AllProducts() {
  const { products, modal, setModal } = useContext(AdminData);
  const [product, setProduct] = useState("");

  //handel edite
  const handelEdit = (item) => {
    setProduct(item);
    setModal(true);
  };

  //edite modal

  return (
    <>
      <div className=" md:overflow-hidden overflow-x-scroll">
        {modal ? <EditProductModal product={product} /> : null}
        <table className=" min-w-full text-left text-sm text-gray-700 border border-gray-200">
          <caption className="text-3xl font-bold my-10 text-start">
            All product
          </caption>
          <thead className="bg-gray-100 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Stock</th>
              <th className="px-4 py-3">Rating</th>
              <th className="px-4 py-3">Sold</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Options</th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-gray-200 bg-white">
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product.id}>
                  <td className="px-4 py-3">
                    <img
                      src={product.image}
                      alt="product image"
                      height="50px"
                      width="50px"
                    />
                  </td>
                  <td className="px-4 py-3">{product.name}</td>
                  <td className="px-4 py-3">{product.category}</td>
                  <td className="px-4 py-3">
                    <span className=" text-green-600">{product.price} $</span>
                  </td>
                  <td className="px-4 py-3">
                    {product.stock > 0 ? (
                      <span>{product.stock}</span>
                    ) : (
                      <span className="text-red-400">Out Stock</span>
                    )}
                  </td>
                  <td className="px-4 py-3">{product.rating}</td>
                  <td className="px-4 py-3">{product.sold}</td>
                  <td className="px-4 py-3">
                    {product.status === "active" ? (
                      <span className=" inline-block rounded bg-green-100 px-2 py-1 text-xs text-green-800">
                        {product.status}
                      </span>
                    ) : (
                      <span className=" inline-block rounded bg-red-100 px-2 py-1 text-xs text-red-800">
                        {product.status}
                      </span>
                    )}
                  </td>
                  <td>
                    <div className="flex justify-start items-center gap-3 p-2">
                      <button
                        className="flex justify-between items-center gap-1 p-2 rounded bg-green-500 text-white cursor-pointer"
                        onClick={() => handelEdit(product)}
                      >
                        <MdEdit />
                        Edite
                      </button>
                      <button className="flex justify-between items-center gap-1 p-2 rounded bg-red-500 text-white cursor-pointer">
                        <MdDeleteForever />
                        Delelt
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">No products available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AllProducts;
