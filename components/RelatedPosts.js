import Link from "next/link";
import moment from "moment";

export default function RelatedPosts({ category, posts }) {
  return (
    <div className=" rounded-md p-2  bg-white w-full">
      <div className=" border-b-4 my-2 border-b-grey">
        <h1>related posts</h1>
      </div>
      {posts &&
        posts.map((ele, idx) => {
          return (
            <Card
              key={idx}
              title={ele.title}
              blogImgUrl={ele.blogImgUrl}
              timestamp={ele.createdAt}
              _id={ele._id}
            />
          );
        })}
    </div>
  );
}

const Card = ({ title, timestamp, _id ,blogImgUrl }) => {
 

  return (
    <Link href={`/blogs/${_id}`} className="cursor-pointer">
      <div className="flex  m-2 p-1 border-b-2">
        <img
          className="h-12 object-cover w-12 rounded-full"
          src={blogImgUrl?blogImgUrl:"react-img.jpg"}
        />
        <div className="ml-4">
          <p>
            {" "}
            {moment(timestamp).format("MMM DD ,YYYY")}
          </p>
          <h2 className="font-bold">{title}</h2>
        </div>
      </div>
    </Link>
  );
};
