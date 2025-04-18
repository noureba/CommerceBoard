import React, { useContext, useState } from "react";
import { AdminData } from "../../context/Context";
import Modal from "../Modal";

function EditOrderModal(Props) {
  const { orders, setOrders, setModal } = useContext(AdminData);
  const [order, setOrder] = useState(Props.order);

  const handleDataSave = () => {
    const updatedOrders = orders.map((item) => {
      if (item.id == order.id) {
        return { ...item, ...order };
      }
      return item;
    });

    setOrders(updatedOrders);
    setModal(false);
  };

  return (
    <Modal>
      <div className="">
        <h3 className="text-2xl font-bold my-10 text-start text-gray-700">
          Edit order
        </h3>
        <div className="flex flex-col justify-start gap-4 p-5 bg-white rounded">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">
              Customer Name <span className="text-red-500">*</span>
            </label>
            <input
              className="border border-fuchsia-500 p-1 rounded"
              type="text"
              value={order.customerName}
              name="customerName"
              onChange={(e) =>
                setOrder({ ...order, customerName: e.target.value })
              }
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              className="border border-fuchsia-500 p-1 rounded"
              type="email"
              value={order.email}
              name="email"
              onChange={(e) => setOrder({ ...order, email: e.target.value })}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              className="border border-fuchsia-500 p-1 rounded"
              type="number"
              value={order.phone}
              name="phone"
              onChange={(e) => setOrder({ ...order, phone: e.target.value })}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="address">
              Address <span className="text-red-500">*</span>
            </label>
            <input
              className="border border-fuchsia-500 p-1 rounded"
              type="text"
              value={order.address}
              name="address"
              onChange={(e) => setOrder({ ...order, address: e.target.value })}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="status">
              Status <span className="text-red-500">*</span>
            </label>
            <select
              name="status"
              className="border border-fuchsia-500 p-1 rounded outline-fuchsia-500"
              value={order.status}
              onChange={(e) => setOrder({ ...order, status: e.target.value })}
            >
              <option value="Shipped">Shipped</option>
              <option value="Processing">Processing</option>
              <option value="Delivered">Delivered</option>
              <option value="Pending">Pending</option>
            </select>
          </div>

          <button
            className="bg-fuchsia-500 text-white rounded px-3 py-2 font-medium cursor-pointer self-start hover:bg-fuchsia-400"
            onClick={() => {
              handleDataSave();
            }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default EditOrderModal;
2;
