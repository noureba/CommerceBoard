import React, { useContext, useState } from "react";
import { AdminData } from "../../context/Context";
import { MdEdit } from "react-icons/md";

const Profile = () => {
  const { users, setUsers } = useContext(AdminData);
  //filter users by role to get admin data
  const adminData = users.filter((item) => item.role === "admin");

  const [user, setUser] = useState(adminData[0]);
  const [edit, setEdit] = useState(false);

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
    const updateUser = users.map((item) => {
      if (item.id === user.id) {
        return { ...item, ...user };
      }
      return item;
    });
    setUsers(updateUser);
    setEdit(false);
  };

  return (
    <div style={{ maxWidth: 800, margin: "auto" }}>
      <h2 className="text-3xl font-bold my-10 text-start">Profile</h2>
      {!edit ? (
        <p
          className="text-blue-600 underline cursor-pointer my-5 flex justify-start items-center gap-2"
          onClick={() => setEdit(true)}
        >
          Edit Info <MdEdit />
        </p>
      ) : null}
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
              readOnly={!edit}
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
              readOnly={!edit}
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
              readOnly={!edit}
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
              readOnly={!edit}
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
              readOnly={!edit}
            />
          </div>
        </div>
      </div>
      {edit ? (
        <button
          className="bg-fuchsia-500 text-white rounded px-3 py-2 font-medium cursor-pointer self-start hover:bg-fuchsia-400"
          onClick={handelSavePage}
          style={{ marginTop: "20px" }}
        >
          Save changes
        </button>
      ) : null}
    </div>
  );
};

export default Profile;
