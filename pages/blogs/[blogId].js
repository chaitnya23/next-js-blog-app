import React from "react";
import BlogCard from "../../components/blogCard";
import Image from "next/image";
import RelatedPosts from "../../components/RelatedPosts";
import axios from "axios";
import { MdDateRange } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import moment from "moment";
import CommentSection from "../../components/CommentSection";
import { useState } from "react";

export default function BlogId({ data, relatedPosts }) {
  const [commentData, setcommentData] = useState({
    user: "",
    date: moment(new Date().getTime()).format("MMM DD ,YYYY"),
    comment: "",
  });

  const [allComments, setAllComments] = useState(data.comments)



  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setcommentData({ ...commentData, [name]: value });
  };

  const postComment = async () => {
    try {
      const { user, date, comment } = commentData;

      const res = await axios.post(
        "/api/blogs/postComment",
        {
          _id: data._id,
          user,
          date,
          comment,
        }
      );

      if (res) {
        setAllComments([...allComments, commentData]);

        setcommentData({
          user: "",
          date: moment(new Date().getTime()).format("MMM DD ,YYYY"),
          comment: "",
        })
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
    
      <div className="md:grid grid-cols-3">
        <div className="col-span-2 ">
          <div className=" m-8  bg-white rounded p-4 shadow-xl">
            <div className="rounded-full ">
              <Image
                className="rounded-lg "
                src={data.blogImgUrl ? data.blogImgUrl : "/react-img.jpg"}
                height={50}
                width="100%"
                layout="responsive"
                objectFit="fill"
              />
            </div>
            <h1 className="text-3xl text-center m-2 mb-3  font-bold">
              {data.title}
            </h1>

            <div className="flex  justify-center my-12 font-semibold  ">
              <MdDateRange color="red" size={20} style={{ marginTop: "7px" }} />
              <p className="mr-8 ml-3 mt-1 ">
                {moment(data.createdAt).format("MMM DD ,YYYY")}
              </p>

              {/*<span className="  px-3 h-8 rounded-full my-1 bg-orange-300">
              {category && category}
               </span>*/}

              <Image
                height="30px"
                width="30px"
                alt=""
                objectFit="contain"
                className="rounded-full ml-3 "
                src={data.profileImgUrl ? data.profileImgUrl : "/user.png"}
              />
              <p className="ml-4  ">{data.author_name}</p>
            </div>
            <div className="content mt-3">
              <p className=" p-1">{data.content}</p>
            </div>
          </div>
          <h1 className="text-3xl font-semibold text-center  my-5">
            Blog credit
          </h1>
          <div className="bg-black text-white relative rounded-lg bg-opacity-60 m-3 mt-12 p-2 ">
            <div className="profile-img absolute  -translate-y-10 left-[45%]">
              <Image
                height="80px"
                alt=""
                width="80px"
                objectFit="contain"
                className="rounded-full"
                src={data.profileImgUrl ? data.profileImgUrl : "/user.png"}
              />
            </div>
            <div className="flex justify-center align-middle py-4 mt-12 mb-4">
              <FaUserAlt scale="1.2" style={{ marginTop: "7px" }} />
              <h2 className="font-semibold text-2xl text-center ml-3 ">
                {data.author_name}
              </h2>
            </div>
            <p className="mt-3 mx-auto text-center p-1">{data.bio}</p>
          </div>
          {/*comment section part */}

          <div className="comment-inbox bg-white  rounded-md m-3 p-1">
            <h2 className="text-xl font-bold  p-1 my-4 text-center">
              Leave a comment
            </h2>
            <div className="m-2">
              <textarea
                className="bg-gray-200 w-full outline-none rounded mx-auto"
                name="comment"
                id="comment"
                onChange={(e) => handleChange(e)}
                rows="5"
                value={commentData.comment}
                placeholder=" write your comment"
              />

              <input
                className="bg-gray-200 w-full outline-none rounded mt-3 p-1"
                onChange={(e) => handleChange(e)}
                name="user"
                type="text"
                value={commentData.user}
                placeholder="your name"
              />

              <div className="m-1 mt-4">
                <button
                  className="w-32 text-white hover:bg-pink-700 font-semibold py-1 bg-pink-600 rounded-full"
                  onClick={postComment}
                >
                  Post Comment
                </button>
              </div>

            </div>
          </div>

          <CommentSection comments={allComments} />
        </div>

        <div className="mt-8 mx-2 h-8">
          <RelatedPosts category={data.category} posts={relatedPosts} />
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const {data} = await axios.get("/api/blogs");
 console.log(data);

  //defining all the possible paths
  const paths = data.map((ele) => {
    return {
      params: {
        blogId: ele._id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `/api/blogs/${context.params.blogId}`
  );
  const data = await res.json();

  const response = await axios.get(
    `/category/${data.category}`
  );
  const relatedPosts = response.data.slice(1, 4);

  return {
    props: {
      data,
      relatedPosts,
    },
  };
};

