import React ,{useState} from "react";
import { AiOutlineComment } from "react-icons/ai";


export default function CommentSection({ comments }) {


  return (
    <div className="bg-white p-2 m-3 rounded-md mt-5">
      <div className="flex">
        <h2 className="text-xl font-bold shadow">
      
          {comments.length} comments
        </h2>
        <AiOutlineComment color="blue" size={25} style={{marginTop:"2px" ,marginLeft:"10px"}}/>
      </div>
      {comments &&
        comments.map((ele, idx) => {
          return <Comment data={ele} key={idx} />;
        })}
    </div>   
  );
}

const Comment = ({ data }) => {
  return (
    <div className="mt-3 border-b-2 p-2 mx-3">
      <p className="my-2 font-bold">
        {data.user} <span className="font-thin">{data.date}</span>
      </p>
      <p className="mt-1 mb-2 font-light">{data.comment}</p>
    </div>
  );
};
