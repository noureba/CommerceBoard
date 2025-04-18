import React, { useContext, useState } from "react";
import { AdminData } from "../../context/Context";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import EditePostsModal from "./EditePostsModal";

function AllPosts() {
  const { posts, setPosts, modal, setModal } = useContext(AdminData);
  const [post, setPost] = useState();

  //handel edite
  const handelEdit = (item) => {
    setPost(item);
    setModal(true);
  };

  //handel delete
  const handelDelete = (id) => {
    const updateProducts = posts.filter((item) => item.id !== id);
    setPosts(updateProducts);
  };

  return (
    <>
      <div className=" overflow-x-scroll">
        {modal ? <EditePostsModal post={post} /> : null}
        <table className=" min-w-full text-left text-sm text-gray-700 border border-gray-200">
          <caption className="text-3xl font-bold my-10 text-start">
            All Pages
          </caption>
          <thead className="bg-gray-100 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-4 py-3">Post ID</th>
              <th className="px-4 py-3">Titile</th>
              <th className="px-4 py-3">author</th>
              <th className="px-4 py-3">date</th>
              <th className="px-4 py-3">category</th>
              <th className="px-4 py-3">status</th>
              <th className="px-4 py-3">content</th>
              <th className="px-4 py-3">Options</th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-gray-200 bg-white">
            {posts.length > 0 ? (
              posts.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-3">{item.id}</td>
                  <td className="px-4 py-3">{item.title}</td>
                  <td className="px-4 py-3">{item.author}</td>
                  <td className="px-4 py-3 text-nowrap">{item.date}</td>
                  <td className="px-4 py-3 text-nowrap">{item.category}</td>

                  <td className="px-4 py-3">
                    {item.status === "Published" ? (
                      <span className=" inline-block rounded bg-green-100 px-2 py-1 text-xs text-green-800">
                        {item.status}
                      </span>
                    ) : (
                      <span className=" inline-block rounded bg-red-100 px-2 py-1 text-xs text-red-800">
                        {item.status}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-wrap">
                    {item.content.slice(0, 50)}...
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

export default AllPosts;
