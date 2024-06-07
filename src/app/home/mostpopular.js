import React from 'react'
import Image from "next/image"
import card1 from "/public/images/card_img.jpg"
import card2 from "/public/images/image-next.jpg"
import card3 from "/public/images/image-next1.jpg"
import ImageCardForCourses from '@/components/ui/img-card'
const MostPopular = () => {
    var data =[
        {

            name: card1,
            title: "Social media marketing",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        },
        {

            name: card2,
            title: "Social media marketing",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        },
        {

            name: card3,
            title: "Social media marketing",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        },

    ]
  return (
    <div
      className="relative mt-[20vh] w-full flex flex-col items-center text-black"
    >
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold md:px-5 mx-[150px] text-center">
          Our Most Popular Courses
        </div>
        <p className="m-5 p-3 text-center w-[50%]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
          excepturi cupiditate harum Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Eos itaque sit nesciunt placeat quaerat eligendi
          ipsa illum facilis, ducimus corporis, voluptates voluptas repellendus
          magni in expedita fugiat quidem fuga officiis?
        </p>
      </div>
      
       <ImageCardForCourses data={data} />
       
      </div>
  )
}

export default MostPopular
