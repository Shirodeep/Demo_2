import Image from "next/image";
import React from "react";
const NewsCardComponent = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className=" w-[40vw] h-auto">
          <div className="md:w-full w-full ">
            <Image
              src={item.image}
              alt=""
              width=""
              height=""
              className=" w-full h-full"
            />
          </div>
          <div className="pt-3 w-full ">
            <p className="text-[12px] pb-1">{item.content}</p>
            <p className="md:text-[16px] text-[14px] font-bold w-[60%]">
            {item.content_desc}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default NewsCardComponent;
