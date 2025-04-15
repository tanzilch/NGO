import React from "react";

const Supporters = () => {
  return (
    <div>
      <div className="flex flex-col mt-[30px] gap-4 lg:gap-14 md:mt-16">
        <div className="flex flex-col lg:flex-row lg-text-[16px] md:flex-col gap-4 items-center font-Roboto-500 text-[16px] lg:text-[18px] font-semibold uppercase ">Our Supporters <hr className=" flex items-center border-[#E5E5E5] h-1 w-[100%] md:w-[100%] lg:w-[85%]" />
        </div>
        <div className=" flex flex-wrap justify-center gap-10 md:gap-10 xl-flex xl:justify-between">
          <img className="" src="/assets/images/logo1.png" alt="logo-image" />
          <img className="" src="/assets/images/logo2.png" alt="logo-image" />
          <img className="" src="/assets/images/logo3.png" alt="logo-image" />
          <img className="" src="/assets/images/logo4.png" alt="logo-image" />
          <img className="" src="/assets/images/logo5.png" alt="logo-image" />
          <img className="" src="/assets/images/logo6.png" alt="logo-image" />
        </div>
      </div>
    </div>
  );
};

export default Supporters;
