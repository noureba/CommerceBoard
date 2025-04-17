import React, { useContext, useState } from "react";
import { AdminData } from "../../context/Context";

function AddOrder() {
  const { orders, setOrders, products } = useContext(AdminData);

  const [order, setOrder] = useState({
    id: Date.now(),
    customerName: "",
    email: "",
    phone: "",
    address: "",
    total: 0,
    status: "Processing", 
    date: "",
    products: [{ name: "", quantity: 1, price: 0 }],
  });

  const handleProductChange = (index, field, value) => {
    const updatedProducts = [...order.products];
    updatedProducts[index] = {
      ...updatedProducts[index],
      [field]: value,
    };

    setOrder({ ...order, products: updatedProducts });
  };

  const handleAddProduct = () => {
    setOrder({
      ...order,
      products: [...order.products, { name: "", quantity: 1, price: 0 }],
    });
  };

  const calculateTotal = () => {
    const total = order.products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setOrder({ ...order, total });
  };

  const handleDataSent = () => {
    setOrders([...orders, order]);
    setOrder({
      customerName: "",
      email: "",
      phone: "",
      address: "",
      total: 0,
      status: "Processing",
      products: [{ name: "", quantity: 1, price: 0 }],
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
        {order.products.map((product, index) => (
          <div key={index} className="flex flex-col gap-2">
            <label htmlFor="product">
              Product {index + 1} <span className="text-red-500">*</span>
            </label>
            <select
              name="product"
              className="border border-fuchsia-500 p-1 rounded outline-fuchsia-500"
              value={product.name}
              onChange={(e) =>
                handleProductChange(index, "name", e.target.value)
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
              value={product.quantity}
              onChange={(e) =>
                handleProductChange(index, "quantity", e.target.value)
              }
            />

            <label htmlFor="price">Price</label>
            <input
              className="border border-fuchsia-500 p-1 rounded"
              type="number"
              value={product.price}
              onChange={(e) =>
                handleProductChange(index, "price", e.target.value)
              }
            />
          </div>
        ))}

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
            calculateTotal();
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
