import React, { useContext, useRef, useState } from "react";
import { AdminData } from "../../context/Context";
import Modal from "../Modal";
import { Editor } from "@tinymce/tinymce-react";

function EditePostsModal(Props) {
  const editorRef = useRef(null);
  const { posts, setPosts, setModal, load, setLoad } = useContext(AdminData);
  const [post, setPost] = useState(Props.post);

  const handelSavePage = () => {
    const updatedPage = posts.map((item) => {
      if (item.id == post.id) {
        return {
          ...item,
          ...post,
          content: editorRef.current.getContent(),
          updatedAt: new Date().toLocaleDateString(),
        };
      }
      return item;
    });

    setPosts(updatedPage);
    setModal(false);
  };

  return (
    <Modal>
      <div style={{ maxWidth: 800, margin: "auto" }}>
        <h2 className="text-3xl font-bold my-10 text-start">Edit Post</h2>
        <div className="fex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="titile">
                Titile <span className="text-red-500">*</span>
              </label>
              <input
                className="border border-fuchsia-500 p-2 bg-white rounded"
                type="text"
                value={post.title}
                name="titile"
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                required
              />
            </div>
           
          </div>
          <div>
            {load ? (
              <div className="bg-gray-50 rounded h-[500px] flex justify-center items-center">
                <p className="text-3xl">Loading ...</p>
              </div>
            ) : null}
            <Editor
              apiKey="bnz2bjbj4mhxa5j6ooua61x1nwrofcuungyrovdib0v24194"
              onInit={(evt, editor) => {
                editorRef.current = editor;
                setLoad(false);
              }}
              initialValue="<p>Start writing your content here...</p>"
              init={{
                height: 500,
                menubar: false,
                directionality: "ltr",
                plugins: [
                  "advlist autolink lists link image charmap preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media | preview code",
              }}
            />
          </div>
        </div>
        <button
          className="bg-fuchsia-500 text-white rounded px-3 py-2 font-medium cursor-pointer self-start hover:bg-fuchsia-400"
          onClick={handelSavePage}
          style={{ marginTop: "20px" }}
        >
          Save Page
        </button>
      </div>
    </Modal>
  );
}

export default EditePostsModal;
2;
