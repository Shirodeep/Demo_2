import React from "react";
import Image from "next/image";
import image from "@/../public/images/background_landing.jpg";
const BannerComponent = () => {
  return (
    <div className="relative mb-5 md:h-[55vh] h-[30vh]  mx-auto w-[100%]">
      {/* <Image src={image} alt="image" width="" height="" className=" w-full h-full justify-center bg-covercover z-30"/> */}
      <div className="absolute text-white top-[40%] pl-[20%]">
        <p className="md:text-[11px] text-[10px] pb-3 z-31 shadow">Recent News</p>
        <p className="md:text-[2rem] text-[1rem] font-bold line-sapcing-3 w-[60%] z-31">Recent news update From the blog</p>
      </div>
    </div>
  );
};

export default BannerComponent;
