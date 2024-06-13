import React from 'react'
import { IoTerminalOutline } from "react-icons/io5";
const PageComponent = ({data}) => {
  return (
    <>
    {data.map((item, index)=>(
      <div key={index} className=' flex flex-col items-center p-3  w-max h-max'>
      <p><IoTerminalOutline className='text-3xl'/></p>
      <p className='md:text-[15px] text-[12px] font-bold'>{item.title}</p>
      <p className='md:text-[13px] text-[10px]'> {item.courses} courses</p>
    </div>
    ))}
    </>
  )
}

export default PageComponent
