import React, { useContext, useState } from "react";
import { AdminData } from "../../context/Context";

const AddUser = () => {
  const { users, setUsers } = useContext(AdminData);
  const date = new Date().toISOString();

  const [user, setUser] = useState({
    id: Date.now(),
    fullName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    role: "customer",
    isActive: true,
    createdAt: date,
    lastLogin: date,
  });

  const handelSavePage = () => {
    if (
      !user.fullName ||
      !user.email ||
      !user.password ||
      !user.phone ||
      !user.address
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    setUsers([...users, user]);
    setUser({
      id: Date.now(),
      fullName: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      role: "customer",
      isActive: true,
      createdAt: date,
      lastLogin: "",
    });
  };

  console.log(user);

  return (
    <div style={{ maxWidth: 800, margin: "auto" }}>
      <h2 className="text-3xl font-bold my-10 text-start">Create user</h2>
      <div className="fex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="fullname">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              className="border border-fuchsia-500 p-2 bg-white rounded"
              type="text"
              value={user.fullName}
              name="fullname"
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              className="border border-fuchsia-500 p-2 bg-white rounded"
              type="email"
              value={user.email}
              name="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              className="border border-fuchsia-500 p-2 bg-white rounded"
              type="password"
              value={user.password}
              name="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              className="border border-fuchsia-500 p-2 bg-white rounded"
              type="number"
              value={user.phone}
              name="phone"
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="address">
              Address <span className="text-red-500">*</span>
            </label>
            <input
              className="border border-fuchsia-500 p-2 bg-white rounded"
              type="text"
              value={user.address}
              name="address"
              onChange={(e) => setUser({ ...user, address: e.target.value })}
              required
            />
          </div>
        </div>
      </div>
      <button
        className="bg-fuchsia-500 text-white rounded px-3 py-2 font-medium cursor-pointer self-start hover:bg-fuchsia-400"
        onClick={handelSavePage}
        style={{ marginTop: "20px" }}
      >
        Save user
      </button>
    </div>
  );
};

export default AddUser;
