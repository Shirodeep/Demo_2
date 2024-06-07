import React from "react";

const FounderCEOSection = () => {
  return (
    <div className="relative m-3 mt-5">
      <div className="md:text-3xl text-2xl font-semibold text-center">
        Be in Demand with Our Professional Training
      </div>
      <p className="pt-4 text-center text-[13px]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui tempore
        doloribus error pariatur
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-3 m-2 p-3 w-[90%] mx-auto">
        <div>
          <img src="./images/CEO.png" className="p-5" />
          <p className="text-center font-bold">Dr. John Smith — Founder & CEO.</p>
        </div>
        <div className="bg-navy_blue w-[98%]">
          <section className="text-gray-700 p-0">
            <div className="container mx-auto">
              <div className="flex flex-wrap w-full">
                <div className="w-full border-b-[1px]">
                  <details className=" bg-white  border-b-[1px]">
                    <summary className=" px-[20px]  font-semibold bg-white py-[30px]">
                      How Long is this site live?
                    </summary>
                    <div className=" px-[20px] py-[30px] pt-5 transition duration-100 border-t-[1px] w-full  px-4 pt-2 ">
                      <span>
                        Laboris qui labore cillum culpa in sunt quis sint
                        veniam. Dolore ex aute deserunt esse ipsum elit aliqua.
                        Aute quis minim velit nostrud pariatur culpa magna in
                        aute.
                      </span>
                    </div>
                  </details>
                  <details className=" bg-white  border-b-[1px]">
                    <summary className=" px-[20px]  font-semibold bg-white py-[30px]">
                      How Long is this site live?
                    </summary>
                    <div className=" px-4 py-[30px] pt-5 transition duration-100 border-t-[1px] w-full  px-4 pt-2 ">
                      <span>
                        Laboris qui labore cillum culpa in sunt quis sint
                        veniam. Dolore ex aute deserunt esse ipsum elit aliqua.
                        Aute quis minim velit nostrud pariatur culpa magna in
                        aute.
                      </span>
                    </div>
                  </details>
                  <details className=" bg-white  border-b-[1px]">
                    <summary className=" px-[20px]  font-semibold bg-white py-[30px]">
                      How Long is this site live?
                    </summary>
                    <div className=" px-[20px] py-[30px] pt-5 transition duration-100 border-t-[1px] w-full  px-4 pt-2 ">
                      <span>
                        Laboris qui labore cillum culpa in sunt quis sint
                        veniam. Dolore ex aute deserunt esse ipsum elit aliqua.
                        Aute quis minim velit nostrud pariatur culpa magna in
                        aute.
                      </span>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FounderCEOSection;
