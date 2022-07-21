import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function () {
  return (
    <div
      className=" sticky top-0  z-20 bg-white bg-opacity-40"
      style={{ backgroundColor: "#40aafd" }}
    >
      <div className="nav md:flex  justify-between">
        <div className="flex align-middle ">
          <Image src="/logo-removed-bg.png" width={80} height={70} />
          <p className="font-bold text-4xl my-auto">
            <span className="text-green-300 ">C</span>
            lloger
          </p>
        </div>
        <ul className="flex justify-end mr-1 font-bold border-none ">
        
          <Link href="/">
            <li className="nav-link">Home</li>
          </Link>

          <Link href="/upload">
            <li className="nav-link">post blog</li>
          </Link>
          <Link href="/educational">
            <li className="nav-link">educational</li>
          </Link>
          <Link href="/sports">
            <li className="nav-link">sports</li>
          </Link>
          <Link href="/technology">
            <li className="nav-link">technology</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
