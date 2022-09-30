import React, { useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import UploadLoader from "../components/uploadLoader";

export default function Upload() {
  const [buttonDisable, setbuttonDisable] = useState(false);
  const [loadingImg, setloadingImg] = useState(false);
  const [uploadLoading, setuploadLoading] = useState(false);

  const [blogdata, setblogdata] = useState({
    author_name: "",
    bio: "",
    profileImgUrl: "",
    title: "",
    category: "",
    content: "",
    blogImgUrl: "",
  });

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setblogdata({ ...blogdata, [name]: value });
  };

  const postBlog = async () => {
    const {
      author_name,
      bio,
      profileImgUrl,
      title,
      category,
      content,
      blogImgUrl,
    } = blogdata;

    if (!author_name || !bio || !title || !content || !category) {
      window.alert("fill all the fields");
      return;
    }

    try {
      setuploadLoading(true);

      const res = await axios.post("https://next-blog-web-app-nlogger-zkjg-gyxd07qyk.vercel.app/api/blogs/upload", {
        author_name,
        bio,
        profileImgUrl,
        title,
        category,
        content,
        blogImgUrl,
      });

      if (res) {
        console.log(res.data);
        setblogdata({
          author_name: "",
          bio: "",
          profileImgUrl: "",
          title: "",
          category: "",
          content: "",
          blogImgUrl: "",
        });

        setuploadLoading(false);
      }
    } catch (error) {
      console.log(error);
      setbuttonDisable(true);
      setuploadLoading(false);

      window.alert("error in uploading");
    }
  };

  const fileToImgUrl = async (file, e) => {
    setloadingImg(true);
    setbuttonDisable(true);
    if (file === undefined) {
      window.alert("something went wrong!! uplog an image only");
    }
    try {
      if (
        file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/jpg"
      ) {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "chat-app");
        data.append("cloud_name", "dkvpwutkh");

        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/dkvpwutkh/image/upload",
          data
        );

        if (res) {
          setblogdata({ ...blogdata, [e.target.name]: res.data.url });
          //console.log(blogdata);
          setbuttonDisable(false);
          setloadingImg(false);
        }
      }
    } catch (error) {
      console.log(error);
      setloadingImg(false);

      window.alert("something went wrong!!");
    }
  };

  return (
    <div>
      {uploadLoading ? (
        <UploadLoader loading={uploadLoading} />
      ) : (
        <div className="  w-full flex justify-center align-middle m-8 ">
          <div className="w-[85%] border-2 p-4 mt-4 block rounded-md shadow-lg bg-white">
            <div className="text-xl font-semibold text-center  my-4 mt-6 shadow">
              Author details
            </div>
            <div className="font-bold my-2">
              <label htmlFor="author_name" className="text-xl">
                Authors Name
              </label>
              <input
                type="text"
                className="input-box"
                name="author_name"
                placeholder="enter your name (author of this blog) "
                onChange={handlechange}
                value={blogdata.author_name}
              />
            </div>

            <div className="font-bold my-2">
              <label htmlFor="bio" className="text-xl">
                Bio
              </label>

              <input
                type="text"
                className="input-box"
                name="bio"
                placeholder="write about yourself (what type of author you are )"
                onChange={handlechange}
                value={blogdata.bio}
              />
            </div>

            <div className="font-bold my-2">
              <label htmlFor="profileImgUrl" className="text-xl">
                upload your image
              </label>

              <div className=" w-full flex justify-center">
                <ClipLoader loading={loadingImg} size={30} />
              </div>
              <input
                type="file"
                name="profileImgUrl"
                className="mt-1 bg-blue-400 input-box w-fulll"
                id="author_img"
                accept="image/"
                onChange={(e) => fileToImgUrl(e.target.files[0], e)}
              />
            </div>

            <div className="text-xl font-lite text-center font-semibold my-4 mt-6 shadow">
              blog details
            </div>

            <div className="my-2 font-bold">
              <label htmlFor="title" className="text-xl">
                Title
              </label>
              <input
                className=" input-box"
                type="text"
                name="title"
                placeholder="Title of your blog"
                id="title"
                onChange={handlechange}
                value={blogdata.title}
              />
            </div>

            <div className="my-2 font-bold">
              <label htmlFor="title" className="text-xl">
                category
              </label>
              <select
                className="outline-none w-full p-1 mt-1 rounded-sm bg-blue-300"
                onChange={handlechange}
                name="category"
                value={blogdata.category}
              >
                <option value="">select a category</option>

                <option value="entertainment">entertainment</option>
                <option value="sports">sports</option>
                <option value="technology">technology</option>
                <option value="educational">educational</option>
              </select>
            </div>

            <div className="my-2 font-bold">
              <label htmlFor="title" className="text-xl">
                content
              </label>
              <textarea
                className="w-full rounded-md outline-none border-2 p-1 "
                cols={10}
                rows={15}
                type="text"
                placeholder="content of your blog"
                name="content"
                id="content"
                onChange={handlechange}
                value={blogdata.content}
              />
            </div>

            <div className="font-bold my-2">
              <label htmlFor="blogImgUrl" className="text-xl">
                embed image for blog{" "}
              </label>
              <input
                type="file"
                name="blogImgUrl"
                className="mt-1 bg-blue-400 input-box w-fulll"
                id="img"
                accept="image/"
                onChange={(e) => fileToImgUrl(e.target.files[0], e)}
              />
            </div>
            <div className="mt-3 flex justify-center">
              <button
                onClick={postBlog}
                disabled={buttonDisable}
                className="text-white hover:bg-green-400 hover:scale-[1.1] transition-all duration-200  bg-blue-500 font-bold p-1 px-5 m-1 rounded-full"
              >
                upload blog
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
