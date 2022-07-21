import React from "react";
import { BeatLoader, ClipLoader } from "react-spinners";



export default function UploadLoader( {loading}) {
  return (
    <div className="absolute flex flex-col justify-center items-center align-middle top-0 bottom-0 w-full bg-black bg-opacity-80">
      <div className="">
        <ClipLoader loading={loading} color="white" size={160} />
      </div>
      <div className="mt-16 p-1">
        <h2 className="text-white font-semibold text-3xl">
          Uploading your blog ........
        </h2>
      </div>
    </div>
  );
}

export const Loader = ()=>{
  return (
    <div className="absolute flex flex-col justify-center items-center align-middle top-0 bottom-0 w-full bg-black bg-opacity-80">
      <div className="">
        <BeatLoader loading={true} color="white" size={50} />
      </div>
      
    </div>
  );
}
