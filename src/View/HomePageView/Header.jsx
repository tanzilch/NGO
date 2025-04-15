import Btn from "../../components/UI/Buttons/Btn";
import { FaCirclePlay } from "react-icons/fa6";
const Header = () => {
  return (
    <div>
      {/* <div className=" bg-cover bg-center relative bg-headerBg">
        <div className="h-screen absolute inset-0 opacity-50 bg-slate-600"></div>
        <div className=" container absolute flex items-center justify-center text-white">
          <h1 className="text-4xl font-bold">
            Inclusive care for children with special needs
          </h1>
        </div>
      </div> */}

      <div className="bg-cover bg-center bg-headerBg">
        <div className="container"> {/*inner/child div of header div */}
          <div className="flex flex-col gap-12 md:gap-20 lg:gap-32 pt-[60px] pb-[70px] xl:pt-[100px] md:pt-[60px]">
            <div className="max-w-[640px] flex flex-col gap-8">
              <div className="flex flex-col font-Roboto text-[44px] lg:text-[64px] font-extrabold text-white md:text-[55px]
             ">
                <p>Inclusive care for children with special needs</p>
              </div>
              <div className="max-w-[640px] flex flex-wrap  items-center gap-3">
                <Btn className='bg-[#ffffff] font-Roboto rounded-sm text-[#1D2130] px-[28px] py-[14px] text-[12px] md:text-[14px] lg:px-[30px] lg:py-[16] '>What We Do</Btn>
                <Btn className=' hover:border hover:border-gray-300 px-[20px] py-[11px] font-Roboto rounded-sm text-[#fff] text-[12px] md:text-[16px]'>
                  <div className="flex gap-2 items-center">
                    <FaCirclePlay size={16} />
                    Play Video
                  </div>

                </Btn>
              </div>
            </div>
            <div className="max-w-[1280px] flex flex-col items-center text-center gap-4 lg:flex-row xl:flex-row">
              <div className="flex text-white text-[16px]"><p>230 children under our care</p></div>
              <hr className="flex w-[50%] md:w-[45%] lg:w-[55%] xl:w-[65%]" />
              <div className=" text-white text-[16px]"><p>58 donations collected</p></div>
            </div>
          </div>
        </div>
      </div>


    </div>

  );
};

export default Header;
