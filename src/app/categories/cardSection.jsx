import CardComponent from "@/components/ui/card-component";
import React from "react";
import imag1 from "@/../public/images/image-next.jpg";
const CardSection = () => {
  const cardData = [
    {
      image: imag1,
      title: "Complete Javascript Course From zero to hero!",
      rating: 3.5,
      lessons: 3,
      studentCount: 120,
      price: 60,
    },
    {
      image: imag1,
      title: "Complete Javascript Course From zero to hero!",
      rating: 3.5,
      lessons: 3,
      studentCount: 120,
      price: 60,
    },
    {
      image: imag1,
      title: "Complete Javascript Course From zero to hero!",
      rating: 3.5,
      lessons: 3,
      studentCount: 120,
      price: 60,
    },
    {
      image: imag1,
      title: "Complete Javascript Course From zero to hero!",
      rating: 3.5,
      lessons: 3,
      studentCount: 120,
      price: 60,
    },
    {
      image: imag1,
      title: "Complete Javascript Course From zero to hero!",
      rating: 3.5,
      lessons: 3,
      studentCount: 120,
      price: 60,
    },
    {
      image: imag1,
      title: "Complete Javascript Course From zero to hero!",
      rating: 3.5,
      lessons: 3,
      studentCount: 120,
      price: 60,
    },
  ];
  return (
    <div className=" grid grid-cols-3 w-[100%] gap-5">
      <CardComponent data={cardData} />
    </div>
  );
};

export default CardSection;
