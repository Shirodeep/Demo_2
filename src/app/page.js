import Image from "next/image";
import Link from "next/link";

const iconName = document.querySelector(".navbar-links");

function toggle_navbar(e) {
  e.name = e.name === "menu" ? "close" : "menu";
  iconName.classList.toggle("top-[15%]");
}
export default function Home() {
  
    
  return (
    <div class="bg-background_landing bg-cover bg-center">
      <div
        class="relative bg-blue bg-opacity-90 py-5 md:min-h-[100vh] min-h-[80vh]"
      >
        <nav
          class="flex items-center md:justify-evenly justify-between w-[90%] mx-auto"
        >
          <div class="">
            <Image
              class="w-400"
              src="https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/06/learn-dash-white-logo.svg"
              alt="Logo"
              width={200}
              height={200}
            />
          </div>
          <div
            class="navbar-links md:static absolute top-[-100%] left-0 md:w-auto w-full flex items-center md:bg-transparent bg-white md:text-white text-black md:font-semibold"
          >
            <ul
              class="flex md:flex-row flex-col md:items-center gap-[2vh] md:py-0 py-3 md:w-auto w-[1000vh] z-50"
            >
              <li
                class="md:px-0 px-5 md:text-none md:text-white text-navy_blue"
              >
                <a class="" href="#">Home</a>
              </li>
              <hr class="md:w-[100%] md:hidden" />
              <li class="md:px-0 px-5"><a href="#">All Courses</a></li>
              <hr class="md:w-[100%] md:hidden" />
              <li class="md:px-0 px-5"><a href="#">About</a></li>
              <hr class="md:w-[100%] md:hidden" />
              <li class="md:px-0 px-5"><a href="#">Contact</a></li>
              <hr class="md:w-[100%] md:hidden" />
              <li class="md:px-0 px-5"><a href="#">My Account</a></li>
            </ul>
          </div>
          <div class="md:hidden flex bg-white h-[5vh] rounded items-center">
            <ion-icon
              onclick={toggle_navbar(this)}
              name="menu"
              class="md:hidden text-3xl cursor-pointer"
            ></ion-icon>
          </div>
        </nav>
        <section
          class="flex flex-col gap-[2vh] relative md:mt-[13%] mt-[10%] items-center text-white"
        >
          <div class="md:text-5xl text-3xl font-bold">
            Learn from Industry Experts
          </div>
          <p class="md:w-[60%] w-[80%] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Dignissimos, sit
            aperiam quae velit officia
          </p>
          <button
            class="rounded-l-[40px] rounded-r-[40px] w-auto px-5 mt-[50px] py-2 text-blue bg-white hover:bg-slate_white"
          >
            View All Courses
          </button>
        </section>
      </div>
    </div>
  );
}
