import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";

function toggle_navbar(e) {
  console.log("asdad");
  // iconName.classNameList.toggle("top-[15%]");
  if (buttonname == "close") {
    buttonname = "menu";
  } else {
    buttonname = "close";
  }
}

const NavBar = () => {
  return (
        <nav className="flex items-center md:justify-evenly justify-between w-[100%] p-5 mx-auto bg-slate-500">
          <div className="">
            <Image
              className="w-400"
              src="https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/06/learn-dash-white-logo.svg"
              alt="Logo"
              width={200}
              height={200}
            />
          </div>
          <div className="navbar-links md:static absolute top-[-107%] left-0 md:w-auto w-full flex items-center md:bg-transparent bg-white md:text-white text-black md:font-semibold">
            <ul className="flex md:flex-row flex-col md:items-center gap-[2vh] md:py-0 py-3 md:w-auto w-[100%] z-50">
              <li className="md:px-0 px-5 md:text-none md:text-white text-navy_blue">
                <a className="" href="#">
                  Home
                </a>
              </li>
              <hr className="md:w-[100%] md:hidden" />
              <li className="md:px-0 px-5">
                <Link href="/home">All Courses</Link>
              </li>
              <hr className="md:w-[100%] md:hidden" />
              <li className="md:px-0 px-5">
                <Link href="/about">About</Link>
              </li>
              <hr className="md:w-[100%] md:hidden" />
              <li className="md:px-0 px-5">
                <Link href="#">Contact</Link>
              </li>
              <hr className="md:w-[100%] md:hidden" />
              <li className="md:px-0 px-5">
                <Link href="#">My Account</Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden flex bg-slate-600 h-[7vh] rounded items-center">
            <TiThMenu  className="text-4xl text-slate-300"/>
          </div>
        </nav>
  );
};

export default NavBar;
