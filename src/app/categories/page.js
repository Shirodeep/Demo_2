import React from "react";
import FilterComponent from "@/components/ui/filter-component";
import CardComponent from "@/components/ui/card-component";
import { IoFilterSharp } from "react-icons/io5";
const Categories = () => {
  var data = [
    {
      title: "personal development",
      content: ["adipisicing elit."],
    },
    {
      title: "personal development",
      content: ["adipisicing elit."],
    },
    {
      title: "personal development",
      content: ["adipisicing elit.", "adipisicing elit."],
    },
    {
      title: "personal development",
      content: ["adipisicing elit.", "adipisicing elit."],
    },
    {
      title: "personal development",
      content: ["adipisicing elit.", "adipisicing elit."],
    },
    {
      title: "personal development",
      content: ["adipisicing elit.", "adipisicing elit."],
    },
  ];

  return (
    <div className=" relative  flex flex-row  w-[80%] mx-auto mt-[20vh] mb-[20vh] border-1">
      <div className="">
        <div className="relative  flex items-center mb-3">
          <IoFilterSharp color="rgb(255, 0, 255)" className="mr-2" />
          Filter Category
        </div>
        <FilterComponent data={data} />
      </div>
      <div>
        <div className="relative text-[14px] flex justify-between items-center mb-3">
          <p>2000+ Course are found</p>
          <div className="">
            <label>Sort By:</label>
            <select className="ml-1 pl-1 py-1 rounded bg-white border border-">
            <option>None</option>
            <option>High to low</option>
            <option>Low to high</option>
            </select>
          </div>
        </div>
        <div className=" grid grid-cols-3 gap-[50px] w-auto">
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </div>
    </div>
  );
};

export default Categories;
