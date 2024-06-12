import React from "react";
import BannerComponent from "@/components/ui/banner-component";
import "./news.css";
import image1 from "@/../public/images/card_img.jpg";

import NewsCardComponent from "@/components/ui/news-card-component";
 const newsData =[
    {
        image: image1,
        content: "Programming . september14, 2020",
        content_desc: "2020 complete python Bootcamp: From Zero to hero"
    },
    {
        image: image1,
        content: "Programming . september14, 2020",
        content_desc: "2020 complete python Bootcamp: From Zero to hero"
    },
    {
        image: image1,
        content: "Programming . september14, 2020",
        content_desc: "2020 complete python Bootcamp: From Zero to hero"
    },
    {
        image: image1,
        content: "Programming . september14, 2020",
        content_desc: "2020 complete python Bootcamp: From Zero to hero"
    }
 ]

const NewsPage = () => {
  return (
    <div>
      <div className="bg_image bg-cover bg-center bg-red-600 mb-[50px]">
        <BannerComponent />
      </div>

      <div className="bg-white grid grid-cols-2 items-center w-[80%] gap-10  mx-auto">
        <NewsCardComponent  data={newsData}/>
      </div>
    </div>
  );
};

export default NewsPage;
