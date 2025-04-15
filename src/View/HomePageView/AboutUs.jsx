/* eslint-disable no-unused-vars */
import React from "react";
import Btn from "../../components/UI/Buttons/Btn";
import Supporters from "../../components/Shared/Supporters";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="flex flex-col gap-6 lg:gap-10 xl:flex-row"> {/*inner div of about us component */}
        <div className="flex flex-col items-center md:flex md:w-full lg:items-start"> {/*first div of about us component inner */}
          <div className="max-w-[710px] lg:pt-[60px] flex flex-col gap-4 md:w-full">
            <div className="flex items-center md:items-center gap-4 font-bold text-[16px] xl:flex xl:flex-row">
              <hr className="flex h-1 bg-[#1D2130]  border-[#1D2130] w-12 " />
              <h1>Know About us</h1>
            </div>
            <div className="flex gap-8 lg:px-[60px] flex-col lg:flex lg:flex-col lg:gap-6  md:flex md:flex-col ">
              <div className=" max-w-[607px] font-Roboto  text-[34px] font-extrabold md:font-extrabold md:text-[46px] lg:text-[46px] xl:text-[48px]">
                <h2>We provide a place for children with special needs</h2>
              </div>
              <div className="flex font-Roboto text-justify text-[15px]  md:text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </div>
              <div className="flex font-Roboto text-[15px] md:text-[15px]">
                ‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,
                ut commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </div>
              <div className="w-50%">
                <Btn
                  className='bg-[#F2C94C] px-5 py-[12px] md:px-[24px] md:py-[12px] rounded-md text-[14px] font-semibold' fontFamily="Roboto"
                // color="bg-[#F2C94C]"
                // size="md"
                // fontFamily="Roboto"
                // text="Learn more"
                >
                  Learn More
                </Btn>
              </div>
            </div>
          </div>
        </div>
        <div className="flex item-center justify-center mx-auto max-w-[480px]  object-cover relative w-full lg:flex lg:justify-center lg:items-center lg:mx-auto md:flex md:justify-center md:items-center md:mx-auto rounded-3xl"> {/*first div of about us component inner */}
          <img src="/assets/images/AboutBg.png" alt="about-us" />
          <img className="absolute top-[50%] w-[45px] h-[45px] md:w-[50px] md:h-[50px]" src="/assets/icons/playIcon.png" alt="play-icon" />
        </div>
      </div>
      <Supporters />
    </div>
  );
};

export default AboutUs;
