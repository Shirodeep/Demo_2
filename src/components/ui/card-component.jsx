import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegAddressBook } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
const CardComponent = ({data}) => {
  return (
    <>
    {data.map((item, index)=>(
      <div className="relative" key={index}>
        <Image src={item.image} alt="" width={300} height={200} className="h-auto w-auto" />
        <p className="pt-2 pb-2">
          {item.title}
        </p>
        <div className="flex flex-row items-left">
          <div className="flex flex-start justify-center items-center m-1 px-2 py-1 border border-1">
            <p className="text-[12px] text-center pr-1">{item.rating}/5 </p>
            <FaStar className=" text-center text-1xl text-yellow-500 " />
          </div>
          <div className="p-2 m-1 border border-1">
            <FaShoppingCart />
          </div>
        </div>
        <div className="p-2 text-[12px] text-gray-700 flex flex-row gap-[30px] justify-start width-[80%]">
          <p className="items-center flex flex-row gap-1">
            <FaRegAddressBook /> {item.lessons} lessons
          </p>
          <p className="items-center flex flex-row gap-1">
            {" "}
            <GoPerson />
            {item.studentCount} students
          </p>
        </div>
        <div className="absolute ml-3 p-2 top-3 bg-white rounded-[50%] text-pink-600">
          ${item.price}
        </div>
      </div>
    ))}
      
    </>
  );
};

export default CardComponent;
