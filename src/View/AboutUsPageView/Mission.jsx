import React from 'react'
import Supporters from '../../components/Shared/Supporters'

const Mission = () => {
  return (
    <div className='bg-[#FCEDC6] mt-[80px] pb-[60px] md:mt-[100px] lg:mt-[120px] xl:mt-[200px]'>
      <div className='container'>
        <div className='relative'>
          <img className='rounded-lg mt-[-100px] md:mt-[-110px] lg:mt-[-160px] xl:mt-[-200px]' src="assets/images/aboutViewBg.png" alt="About-view-Bg" />
          <div className='absolute inset-0 flex items-center justify-center' >
            <img className='w-[40px] h-[40px] md:w-[55px] md:h-[55px] xl:w-[60px] xl:h-[60px]' src="assets/icons/playIcon.png" alt="play-icon" />
          </div>
        </div>

        <div className='flex pt-8 lg:justify-center xl:px-[60px] md:pt-16 md:px-0 lg:px-10 '>  {/*This is the main parent div*/}
          <div className='max-w-[1090px]  flex flex-col lg:flex-row gap-7 md:justify-center  md:gap-10 lg:gap-12 xl:gap-14'>{/*This div have two div inside */}
            <div className='w-full lg:max-w-[496px] flex flex-col gap-2'>
              <div className=' flex flex-col uppercase text-[12px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-Roboto font-extrabold text-[#1D2130]'>
                <h1>Our Mission</h1>
              </div>
              <div className='flex flex-col gap-2'>
                <h3 className='text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] font-Roboto font-extrabold text-[#1D2130]'>We make sure to provide inclusive care for children with special needs</h3>
                <p className='text-[12px] md:text-[14px] lg:text-[15px]  font-Roboto text-[#1D2130] leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
              </div>
            </div>


            <div className=' w-full lg:max-w-[496px] flex flex-col gap-2'>
              <div className=' flex flex-col uppercase text-[12px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-Roboto font-extrabold text-[#1D2130]'>
                <h1>Our Mission</h1>
              </div>
              <div className='flex flex-col gap-2'>
                <h3 className='text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] font-Roboto font-extrabold text-[#1D2130]'>Provide more inclusive care to children around the world</h3>
                <p className='text-[12px] md:text-[14px] lg:text-[15px]  font-Roboto text-[#1D2130] leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
              </div>
            </div>


          </div>
        </div>
        <Supporters />
      </div>
    </div>

  )
}

export default Mission