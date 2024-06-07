import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-slate-500 bg-opacity-90p-3 md:h-[85vh] h-[75vh]">
      <div className="relative">
        <section className="flex flex-col gap-[2vh] relative pt-[10%] pb-[10%] items-center text-white">
          <div className="md:text-5xl text-3xl font-bold">
            Learn from Industry Experts
          </div>
          <p className="md:w-[60%] w-[80%] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Dignissimos, sit
            aperiam quae velit officia
          </p>
          <button className="rounded-l-[40px] rounded-r-[40px] w-auto px-5 mt-[50px] py-2 text-blue-500 bg-white hover:bg-slate_white">
            View All Courses
          </button>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
