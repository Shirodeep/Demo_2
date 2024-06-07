import React from "react";

const CardComponent = ( {data} ) => {
  data.map((item, index) =>{
    console.log(item.title)
  })
  return (
    <div className="relative md:mt-[-70px] mt-[-65px] grid md:grid-cols-3 gap-[40px] md:w-[80%] w-[95%] sm:grid-cols-1 mx-auto">
      {data.map((item, index) => {
        <div
          key={index}
          className="bg-blue-300 flex flex-col items-center md:pb-5 pb-[3vh] h-auto mx-auto w-[100%] md:px-4 pt-2 rounded-[5px] shadow-2xl"
        >
          <div className="text-2xl font-semibold w-auto text-center">
            {item.title}
          </div>
          <div className="text-0xl w-auto md:p-3 p-2 text-center">
            {item.description}
          </div>
        </div>
      })}
    </div>
  );
};

export default CardComponent;
