import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
const ImageCardForCourses = ({ data }) => {
  return (
    <div className="m-4 relative grid md:grid-cols-3 grid-cols-1 gap-10 p-2 w-[90%] mx-auto">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col bg-white border-[1px] md:w-auto w-[70%]"
        >
          <div className="m-[-10px] mt-1 absolute bg-green-400 px-1 text-white z-[50px]">
            Free
          </div>
          <AspectRatio ratio={16 / 9}>
            <Image
              src={item.name}
              alt="may be image"
              className="w-full"
              width={100}
              height={100}
            />
          </AspectRatio>
          <div className="font-bold text-2xl p-3 pl-5">{item.title}</div>
          <p className="font-0xl text-left pr-3 pl-5">{item.description}</p>
          <button className="m-4 text-center bg-blue-800 rounded-l-[4px] rounded-r-[4px] px-2 py-1 text-white">
            See more...
          </button>
        </div>
      ))}
    </div>
  );
};

export default ImageCardForCourses;
