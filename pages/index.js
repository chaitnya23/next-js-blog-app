import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import BlogCard from "../components/blogCard";
import FeaturedPosts from "../components/FeaturedPosts";
import { BiSearchAlt2 } from "react-icons/bi";
import Head from "next/head";

export default function AllBlogs({ data, featuredPosts }) {
  const [blogs, setblogs] = useState(data);
  const [search, setsearch] = useState("");

  const handleSearch = () => {
    setblogs(
      blogs.filter((ele) => {
        return ele.title.includes(search);
      })
    );

    
  };

  return (
    <div>
    <Head>
      <title>Cllogger</title>
    </Head>
      <div className="flex justify-center">
        <div className="search-box flex w-fit rounded-full m-2 bg-white p-1">
          <input
            type="text"
            className=" rounded-full outline-none  search-input "
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            placeholder="look for the  blog you need"
          />
          <button
            className="bg-red-400 rounded-full p-2  "
            onClick={handleSearch}
          >
            <BiSearchAlt2 />
          </button>
        </div>
      </div>
      <FeaturedPosts posts={featuredPosts} />

      <div className="md:grid grid-cols-3">
        <div className="categories-sec m-8 ">
          <ul className="m-1 p-1 bg-white rounded-md">
            <p className="text-center border-b-2">Categories</p>
            <Link href="/entertainment">
              <li className="p-2 hover:bg-blue-300 cursor-pointer my-1 rounded-sm font-semibold">
                entertainment
              </li>
            </Link>
            <Link href="/sports">
              <li className="p-2 hover:bg-blue-300 cursor-pointer my-1 rounded-sm font-semibold">
                sports
              </li>
            </Link>
            <Link href="/technology">
              <li className="p-2 hover:bg-blue-300 cursor-pointer my-1 rounded-sm font-semibold">
                technology
              </li>
            </Link>
            <Link href="/educational">
              <li className="p-2 hover:bg-blue-300 cursor-pointer my-1 rounded-sm font-semibold">
                educational
              </li>
            </Link>
          </ul>
        </div>
        <div className="bolgs col-span-2">
          {data &&
            blogs.map((ele, idx) => {
              return (
                <BlogCard
                  _id={ele._id}
                  key={idx}
                  title={ele.title}
                  author_name={ele.author_name}
                  profileImgUrl={ele.profileImgUrl}
                  blogImgUrl={ele.blogImgUrl}
                  bio={ele.bio}
                  category={ele.category}
                  content={ele.content}
                  timestamp={ele.createdAt}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("https://next-blog-web-app-nlogger-zkjg-gyxd07qyk.vercel.app/api/blogs");
  const idx = Math.floor(Math.random() * res.data.length - 1);

  return {
    props: {
      data: res.data,
      featuredPosts: res.data.slice(idx, idx + 5),
    },
  };
};
