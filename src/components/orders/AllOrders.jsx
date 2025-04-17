import React, { useContext, useState } from "react";
import { AdminData } from "../../context/Context";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import EditProductModal from "../products/EditProductModal";
import { FaArrowAltCircleDown } from "react-icons/fa";

function AllOrders() {
  const { orders, setOrders, modal, setModal } = useContext(AdminData);
  const [product, setProduct] = useState("");

  //handel edite
  const handelEdit = (item) => {
    setProduct(item);
    setModal(true);
  };

  //handel delete
  const handelDelete = (id) => {
    const updateProducts = orders.filter((item) => item.id !== id);
    setOrders(updateProducts);
  };

  return (
    <>
      <div className=" overflow-x-scroll">
        {modal ? <EditProductModal product={product} /> : null}
        <table className=" min-w-full text-left text-sm text-gray-700 border border-gray-200">
          <caption className="text-3xl font-bold my-10 text-start">
            All Orders
          </caption>
          <thead className="bg-gray-100 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-4 py-3">Product ID</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">address</th>
              <th className="px-4 py-3">Products</th>
              <th className="px-4 py-3">Total</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Options</th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-gray-200 bg-white">
            {orders.length > 0 ? (
              orders.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-3">{item.id}</td>
                  <td className="px-4 py-3">{item.customerName}</td>
                  <td className="px-4 py-3">{item.email}</td>
                  <td className="px-4 py-3 text-nowrap">{item.phone}</td>
                  <td className="px-4 py-3">{item.address}</td>
                  <td className="px-4 py-3">
                    <ul>
                      {item.products.map((item) => (
                        <li className="text-nowrap" key={item.name}>
                          {item.name} × {item.quantity}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-4 py-3">
                    <span className=" text-green-600">{item.total} $</span>
                  </td>
                  <td className="px-4 py-3">
                    {item.status === "Delivered" ? (
                      <span className=" inline-block rounded bg-green-100 px-2 py-1 text-xs text-green-800">
                        {item.status}
                      </span>
                    ) : (
                      <span className=" inline-block rounded bg-red-100 px-2 py-1 text-xs text-red-800">
                        {item.status}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-nowrap">{item.date}</td>

                  <td>
                    <div className="flex justify-start items-center gap-3 p-2">
                      <button
                        className="flex justify-between items-center gap-1 p-2 rounded bg-green-500 text-white cursor-pointer"
                        onClick={() => handelEdit(item)}
                      >
                        <MdEdit />
                        Edite
                      </button>
                      <button
                        className="flex justify-between items-center gap-1 p-2 rounded bg-red-500 text-white cursor-pointer"
                        onClick={() => handelDelete(item.id)}
                      >
                        <MdDeleteForever />
                        candel
                      </button>
                      <button
                        className="flex justify-between items-center gap-1 p-2 rounded bg-blue-500 text-white cursor-pointer"
                        onClick={() => handelDelete(item.id)}
                      >
                        <FaArrowAltCircleDown />
                        Download
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-2xl text-center py-5" colSpan="9">
                  No products available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AllOrders;
