import React from "react";
import CardComponent from "@/components/ui/cards-component";
const CardSection = () => {
  var data = [
    {
      title: "Actionable result",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Actionable result",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Actionable result",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  ]
  return (
    <div className="bg-black">
      <CardComponent data={data} />
    </div>
  );
};

export default CardSection;
