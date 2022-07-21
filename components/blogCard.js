import Image from "next/image";
import Link from "next/link";
import { MdDateRange } from "react-icons/md";
import moment from "moment";

function BlogCard({ _id, title, category,author_name ,profileImgUrl ,blogImgUrl ,bio, content, timestamp }) {

  return (
    <div className=" m-8 bg-white rounded p-4 shadow-xl">
      <div className=" rounded-full ">
        <Image
          className="rounded-lg"
          src={blogImgUrl?blogImgUrl:"/react-img.jpg"}
          height={50}
          width="100%"
          layout="responsive"
          objectFit="fill"
        />
      </div>

      <h1 className="text-3xl text-center m-2 mb-3 font-bold">{title}</h1>

      <div className="flex  justify-center my-12 font-semibold  ">
        <MdDateRange color="red" size={20} style={{ marginTop: "7px" }} />

        <p className="mr-8 ml-3 mt-1 ">
          {moment(timestamp).format("MMM DD ,YYYY")}
        </p>

        {/*<span className="px-3 h-8 rounded-full my-1"> {category && category} </span>*/}

        <Image
          height="30px"
          width="30px"
          objectFit="contain"
          className="rounded-full ml-3"
          src={profileImgUrl?profileImgUrl:"/user.png"}
        />
        <p className="ml-4">{author_name}</p>
      </div>

      <div className="content mt-3">
        <p className=" h-12 text-center overflow-hidden">{content}</p>
        <span>.....</span>
      </div>

      <div className="div flex justify-center mt-4">
        <Link href={`http://localhost:3000/blogs/${_id}`}>
          <button className="transition-all duration-500 hover:-translate-y-1 hover:bg-blue-500 p-2 rounded-3xl font-bold px-7 bg-blue-400 ">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
