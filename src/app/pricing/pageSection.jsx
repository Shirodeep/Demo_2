import BannerComponent from "@/components/ui/banner-component";
import React from "react";
import image1 from "@/../public/images/image-next.jpg"
import PageComponent from "@/components/ui/pircing-items-component";
import PricingCardComponent from "@/components/ui/pricing-card-component";
const PageSection = () => {
  var pricingData = [
    {
      title: "Development",
      courses: 120,
    },
    {
      title: "Development",
      courses: 120,
    },
    {
      title: "Development",
      courses: 120,
    },
    {
      title: "Development",
      courses: 120,
    },
    {
      title: "Development",
      courses: 120,
    },
  ];
  var bannerData = [
    {
      title: "Course Packages",
      description: "Buy Course Package For Single Price",
      image: image1,
    },
  ];
  var pricingCardData = [
    {
      title: "Development",
      price:199,
      contents: [ "Web Development", "Dashboard Development", "Mobile Development"]
    },
    {
      title: "Development",
      price:199,
      contents: [ "Web Development", "Dashboard Development", "Mobile Development"]
    },
    {
      title: "Development",
      price:199,
      contents: [ "Web Development", "Dashboard Development", "Mobile Development"]
    },
    {
      title: "Development",
      price:199,
      contents: [ "Web Development", "Dashboard Development", "Mobile Development"]
    },
    {
      title: "Development",
      price:199,
      contents: [ "Web Development", "Dashboard Development", "Mobile Development"]
    },
    {
      title: "Development",
      price:199,
      contents: [ "Web Development", "Dashboard Development", "Mobile Development"]
    },
    {
      title: "Development",
      price:199,
      contents: [ "Web Development", "Dashboard Development", "Mobile Development"]
    },
    {
      title: "Development",
      price:199,
      contents: [ "Web Development", "Dashboard Development", "Mobile Development"]
    },
    {
      title: "Development",
      price:199,
      contents: [ "Web Development", "Dashboard Development", "Mobile Development"]
    },
  ]
  return (
    <div>
      <BannerComponent data={bannerData}/>
      <div className="mt-[-50px] p-3 bg-slate-100 w-[85%] border-1 rounded-1 gap-3 mx-auto grid grid-cols-5 z-50">
        <PageComponent data={pricingData} />
      </div>
      <div className="mt-[4rem] grid md:grid-cols-4 grid-cols-2 items-center w-[80%] mx-auto gap-3">
        <PricingCardComponent data= {pricingCardData}/>
      </div>
    </div>
  );
};

export default PageSection;
