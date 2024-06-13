import React from "react";

const PricingCardComponent = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className=" w-[15rem] h-max p-5 text-center border-[1px]">
          <p className="pb-2 text-[13px] font-bold">{item.title}</p>
          <hr />
          <p className=" pt-2 pb-2 text-pink-700 text-1xl">
            <sup>$</sup>{item.price}<sub>/Mo</sub>
          </p>
          {item.contents.map((ite, index)=>(
            <div className=" flex flex-col text-[12px]">
            <p className="p-1 ">{ite}</p>
          </div>
          ))}
          <div className="m-2 bg-pink-700 rounded">
            <button className="text-bink-700 p-2"> Enroll Now</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default PricingCardComponent;
