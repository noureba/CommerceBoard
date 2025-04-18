import React, { useContext, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { AdminData } from "../../context/Context";

const AddPosts = () => {
  const { load, setLoad } = useContext(AdminData);
  const editorRef = useRef(null);

  const [post, setPost] = useState({
    id: Date.now(),
    title: "",
    author: "",
    date: "",
    category: "",
    status: "",
    content: "",
  });

  const handelSavePage = () => {
    const updatePage = { ...post, content: editorRef.current.getContent() };
    console.log(updatePage);
  };

  return (
    <div style={{ maxWidth: 800, margin: "auto" }}>
      <h2 className="text-3xl font-bold my-10 text-start">Create Post</h2>
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
        Save Post
      </button>
    </div>
  );
};

export default AddPosts;
