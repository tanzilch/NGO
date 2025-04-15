import React from 'react'

const Header = () => {
    return (
        <div className='container'>
            <div className='flex flex-col gap-8 lg:flex-row justify-between pt-10 md:pt-10 md:gap-8 lg:pt-12 lg:gap-10'>
                <div className='max-w-[690px] flex flex-1 flex-col gap-4 md:gap-2 lg:gap-4'>
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-3 uppercase text-[14px]">
                        <hr className="flex h-1 bg-[#1D2130]  border-[#1D2130] w-12 " />
                        <h1>What We Do</h1>
                    </div>
                  <div className='flex flex-col gap-3 xl:pl-[55px] xl:gap-5'>
                        <div className='lg:max-w-[461px] max-w-full'>
                            <h1 className='text-[36px] md:text-[42px] lg:text-[48px] xl:text-[58px]  font-Roboto font-extrabold'>We are working cross country</h1>
                        </div>
                        <div className='max-w-[594px] md:max-w-full'>
                            <p className='text-[13px] md:text-[14px] lg:text-[15px] leading-6 xl:leading-7 text-[#525560]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                        </div>
                  </div>
                </div>

                <div className='max-w-[476px] mx-auto md:mx-auto'>
                    <img className='object-cover w-full h-auto' src="assets/images/whatBg.png" alt="what-background" />
                </div>


            </div>
        </div>
    )
}

export default Header