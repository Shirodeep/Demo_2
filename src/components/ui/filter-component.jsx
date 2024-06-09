import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

const FilterComponent = ({ data }) => {
  var data1 = [];
  return (
    <div className="relative border border-1 h-[max-content] mr-[50px] p-3 mb-2 w-[40vh]">
      {data.map((item, index) => (
        <div>
          <div className="font-bold text-1xl pb-2 p-1">{item.title}</div>
          {data1 = item.content}
          {data1.map((items, index1) => (
            <div className="flex flex-row items-center w-auto mb-4">
              <Checkbox className="mr-1" />
              <label className=" text-[12px] flex flex-row">
                {items}
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FilterComponent;
