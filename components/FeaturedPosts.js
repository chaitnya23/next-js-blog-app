import Image from "next/image";
import Link from "next/link";
import moment from "moment";

export default function FeaturedPosts({ posts }) {
  return (
    <div>
      <h2 className="font-bold p-2 text-xl text-white">featured blogs</h2>
    
      <div className=" md:flex  rounded-md p-2 ">
        {posts &&
          posts.map((ele, idx) => {
            return (
              <Card
                key={idx}
                title={ele.title}
                timestamp={ele.createdAt}
                blogImgUrl={ele.blogImgUrl}
                profileImgUrl={ele.profileImgUrl}
                author_name={ele.author_name}
                _id={ele._id}
              />
            );
          })}
      </div>

    </div>
  );
}

const Card = ({ title, timestamp, _id ,blogImgUrl ,author_name ,profileImgUrl }) => {
 

  return (
    <Link href={`/blogs/${_id}`}>
      <div
        className="relative w-full mx-auto md:w-52  shadow-2xl hover:scale-105 transition-all duration-300  overflow-hidden rounded-md  bg-no-repeat drop-shadow-lg bg-center bg-cover p-3  card m-2 "
        style={{ backgroundImage: `url(${blogImgUrl?blogImgUrl:"react-img.jpg"})` }}
      >
        <div className="absolute w-full  bg-opacity-20 top-0 bottom-0 bg-black z-10"></div>
        <div className="flex  z-20 flex-col text-center  items-center text-white  justify-center">
          <p className="mb-4 mt-2">
          {moment(timestamp).format("MMM DD ,YYYY")}

          </p>
          <p className="font-bold text-xl p-2 mb-4 ">{title}</p>
        </div>
        <div className="author flex justify-center my-6">
          <Image
            src={profileImgUrl?profileImgUrl:"/user.png"}
            className="rounded-full "
            objectFit="contain"
            width="30px"
            height="30px"
          />
          <p className="text-white ml-5">{author_name}</p>
        </div>
      </div>
    </Link>
  );
};
