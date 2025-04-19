import React, { useContext, useState } from "react";
import { AdminData } from "../../context/Context";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import EditUserModal from "./EditUserModal";
import { BiShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";

function AllUsers() {
  const { users, setUsers, modal, setModal } = useContext(AdminData);
  const [user, setUser] = useState();
  const [showPassword, setSHowPassword] = useState({
    id: "",
    status: false,
  });

  //handel edite
  const handelEdit = (item) => {
    setUser(item);
    setModal(true);
  };

  //handel delete
  const handelDelete = (id) => {
    const updateProducts = users.filter((item) => item.id !== id);
    setUsers(updateProducts);
  };

  //last login
  const handleLasteLogin = (lastLogin) => {
    const date = new Date();
    const lastLoginDate = date - new Date(lastLogin);
    const days = Math.floor(lastLoginDate / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (lastLoginDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (lastLoginDate % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((lastLoginDate % (1000 * 60)) / 1000);

    return `${days} Days ${hours} : ${minutes} : ${seconds} ago`;
  };

  //handel show password
  const handleShowPassword = (id) => {
    setSHowPassword({ id, status: !showPassword.status });
  };

  return (
    <>
      <div className=" overflow-x-scroll">
        {modal ? <EditUserModal user={user} /> : null}
        <table className=" min-w-full text-left text-sm text-gray-700 border border-gray-200">
          <caption className="text-3xl font-bold my-10 text-start">
            All Pages
          </caption>
          <thead className="bg-gray-100 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-4 py-3">User ID</th>
              <th className="px-4 py-3">Full name</th>
              <th className="px-4 py-3">email</th>
              <th className="px-4 py-3">password</th>
              <th className="px-4 py-3">phone</th>
              <th className="px-4 py-3">address</th>
              <th className="px-4 py-3">role</th>
              <th className="px-4 py-3">create at</th>
              <th className="px-4 py-3">last login</th>
              <th className="px-4 py-3">Options</th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-gray-200 bg-white">
            {users.length > 0 ? (
              users.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-3">{item.id}</td>
                  <td className="px-4 py-3">{item.fullName}</td>
                  <td className="px-4 py-3">{item.email}</td>
                  <td className="px-4 py-3 text-nowrap">
                    <input
                      type={
                        showPassword.id == item.id && showPassword.status
                          ? "text"
                          : "password"
                      }
                      value={item.password}
                      readOnly
                    />
                    <button
                      className=" text-2xl"
                      onClick={() => handleShowPassword(item.id)}
                    >
                      {showPassword.id == item.id && showPassword.status ? (
                        <BiShow />
                      ) : (
                        <BiSolidHide />
                      )}
                    </button>
                  </td>
                  <td className="px-4 py-3 text-nowrap">{item.phone}</td>
                  <td className="px-4 py-3 text-nowrap">{item.address}</td>
                  <td className="px-4 py-3 text-nowrap">{item.role}</td>
                  <td className="px-4 py-3 text-nowrap">{item.createdAt}</td>

                  <td className="px-4 py-3 text-nowrap">
                    {handleLasteLogin(item.lastLogin)}
                  </td>

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
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-2xl text-center py-5" colSpan="10">
                  No users available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AllUsers;
