import axios from "axios";
import React from "react";
import BlogCard from "../components/blogCard";
import Link from "next/link";

export default function CategoryBlogs ({ data }) {



  return(
    <div>
      <h1 className="text-4xl font-bold text-center mt-3">
        
      </h1>
      <div className="md:grid grid-cols-3">
        <div className="categories-sec m-8 ">
          <ul className="m-1 p-1 bg-white rounded-md">

            <p className="text-center border-b-2"> Categories </p>

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
        <div className="blogs col-span-2">
          {data &&
            data.map((ele, idx) => {
              return (
                <BlogCard
                  _id={ele._id}
                  key={idx}
                  title={ele.title}
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

export const getServerSideProps = async (context) => {
  const res = await axios.get(
    `/api/category/${context.query.category}`
  );

  return {
    props: {
      data: res.data,
    },
  };
};
