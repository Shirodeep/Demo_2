import React from 'react'

const Footer = () => {
  return (
    <div className="bg-slate-500 py-[45px] mt-[50px]">
    <footer
      className="w-[80%] mx-auto h-auto text-white items-center text-center"
    >
      <div className="text-4xl font-bold p-5 text-center">
        Join Our 7452 Happy Students Today!
      </div>
      <div className="text-0xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
        blanditiis odio animi a obcaecati, rerum eos laudantium, tempore
        recusandae sapiente itaque quo ipsam porro! Iure vel et aspernatur
        perferendis quo!
      </div>
      <button
        className="rounded-l-[40px] rounded-r-[40px] w-auto px-10 mt-[50px] py-3 text-blue-500 bg-white hover:bg-slate_white"
      >
        Start Learning
      </button>
    </footer>
    <hr className="mt-12 mb-12 w-full" />
    <div className="text-white text-center mt-3 pb-12">
      Copyright &copy; 2024 LearnDash Academy
    </div>
  </div>

  )
}

export default Footer
