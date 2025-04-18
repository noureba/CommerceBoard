import React, { useContext, useState } from "react";
import { AdminData } from "../../context/Context";

function AddOrder() {
  const { orders, setOrders, products } = useContext(AdminData);
  const date = new Date();
  const todayDate = date.toISOString().split("T")[0]

  const [order, setOrder] = useState({
    id: Date.now(),
    customerName: "",
    email: "",
    phone: "",
    address: "",
    total: 0,
    status: "Processing",
    date: todayDate,
    products: [],
  });

  const [orderProducts, setOrderProducts] = useState({
    id: Date.now(),
    name: "",
    quantity: 1,
    price: 0,
  });

  const handleAddProduct = () => {
    const updatedOrder = {
      ...order,
      products: [...order.products, orderProducts],
    };
    setOrder(updatedOrder);
    setOrderProducts({ id: Date.now(), name: "", quantity: 1, price: 0 });

    //calculate Total
    const updatedTotal = [...updatedOrder.products];
    const total = updatedTotal.reduce((acc, cur) => {
      return acc + cur.price * cur.quantity;
    }, 0);
    setOrder({ ...updatedOrder, total: total });
  };

  const handleDataSent = () => {
    setOrders([...orders, order]);
    setOrder({
      id: Date.now(),
      customerName: "",
      email: "",
      phone: "",
      address: "",
      total: 0,
      status: "Processing",
      date: "",
      products: [],
    });
  };

  return (
    <div className="">
      <h3 className="text-2xl font-bold my-10 text-start text-gray-700">
        Add new Order
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
        <hr />
        <table className=" min-w-full text-left text-sm text-gray-700 border border-gray-200">
          <caption className="text-xl font-bold my-10 text-start">Cart</caption>
          <thead>
            <tr className="bg-gray-100 text-xs uppercase text-gray-500">
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Quantity</th>
              <th className="px-4 py-3">Price</th>
            </tr>
          </thead>
          <tbody>
            {order.products.length > 0 ? (
              order.products.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-3">{item.name}</td>
                  <td className="px-4 py-3">{item.quantity}</td>
                  <td className="px-4 py-3">${item.price}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-xl text-center py-5" colSpan="3">
                  No products available
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <hr />
        <div className="flex flex-col gap-2">
          <label htmlFor="product">
            Product <span className="text-red-500">*</span>
          </label>
          <select
            name="product"
            className="border border-fuchsia-500 p-1 rounded outline-fuchsia-500"
            value={orderProducts.name}
            onChange={(e) =>
              setOrderProducts({ ...orderProducts, name: e.target.value })
            }
          >
            {products.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>

          <label htmlFor="quantity">Quantity</label>
          <input
            className="border border-fuchsia-500 p-1 rounded"
            type="number"
            value={orderProducts.quantity}
            onChange={(e) =>
              setOrderProducts({ ...orderProducts, quantity: e.target.value })
            }
          />

          <label htmlFor="price">Price</label>
          <input
            className="border border-fuchsia-500 p-1 rounded"
            type="number"
            value={orderProducts.price}
            onChange={(e) =>
              setOrderProducts({
                ...orderProducts,
                price: parseInt(e.target.value),
              })
            }
          />
        </div>

        <button
          type="button"
          onClick={handleAddProduct}
          className="bg-blue-500 text-white rounded px-3 py-2 font-medium cursor-pointer self-start hover:bg-blue-400"
        >
          Add Product
        </button>

        <div className="flex flex-col gap-2">
          <p>Total: ${order.total}</p>
        </div>

        <button
          className="bg-fuchsia-500 text-white rounded px-3 py-2 font-medium cursor-pointer self-start hover:bg-fuchsia-400"
          onClick={() => {
            handleDataSent();
          }}
        >
          Add Order
        </button>
      </div>
    </div>
  );
}

export default AddOrder;
