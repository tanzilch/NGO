import React from 'react'

const Services = () => {
    return (
        <div className=' bg-[#FCEDC6]'>
        <div className='max-w-[1500px] container '>
            <div className="lg:flex md:flex flex flex-col py-6 gap-6 md:py-10  w-full  xl:flex xl:flex-col">
                <div className='flex items-center text-[16px]  gap-4 font-bold uppercase xl:flex xl:flex-row'>
                    <hr className=" flex h-1  bg-[#1D2130]  border-[#1D2130]  w-10" />
                    <h2>What We Do</h2>
                </div>
                <div className='flex flex-col gap-14 xl:flex-row'>
                    <div className='flex flex-1'>
                        <div className='max-w-[600px] flex flex-col gap-6 md:w-full'>

                            <div className=" max-w-[610px] flex flex-col gap-6 xl:pl-14">
                                <div className="font-Roboto text-[#1D2130] text-[34px] md:text-[46px] font-bold">
                                    <h2>Some services we provide for our children</h2>
                                </div>
                                <div className="flex font-Roboto text-[14px] md:text-[16px] text-[#525560] leading-6">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                                    tristique.
                                </div>
                                <div className='flex flex-col max-w-[480px] gap-8 pl-3 border-l-2 border-[#E5E5E5]'>
                                    <div className='flex gap-3'>
                                        <div className='flex'>
                                            <img className='h-6 max-w-9 w-full md:h-6 md:w-6' src="/assets/icons/Icon1.png" alt="home-icon" />
                                        </div>
                                        <div className='flex flex-col gap-2 '>
                                            <h2 className='font-Roboto text-[16px] font-bold md:text-[18px]'>Family support</h2>
                                            <p className='max-w-[384px] text-[14px] md:text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex gap-3'>
                                        <div className='flex'>
                                            <img className='h-6 max-w-9 w-full md:h-6 md:w-6' src="/assets/icons/Icon2.png" alt="home-icon" />
                                        </div>
                                        <div className='flex flex-col gap-2  '>
                                            <h2 className='font-Roboto text-[16px] font-bold md:text-[18px]'>Health benefits</h2>
                                            <p className='max-w-[384px] text-[14px] md:text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex gap-3'>
                                        <div className='flex'>
                                            <img className='h-6 max-w-9 w-full md:h-6 md:w-6' src="/assets/icons/Icon3.png" alt="home-icon" />
                                        </div>
                                        <div className='flex flex-col gap-2  '>
                                            <h2 className='font-Roboto text-[16px] font-bold md:text-[18px]'>Scholarships</h2>
                                            <p className=' max-w-[384px] text-[14px] md:text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex gap-3'>
                                        <div className='flex'>
                                            <img className='h-6 max-w-9 w-full md:h-6 md:w-6' src="/assets/icons/Icon4.png" alt="home-icon" />
                                        </div>
                                        <div className='flex flex-col gap-2 '>
                                            <h2 className='font-Roboto text-[16px] font-bold md:text-[18px]'>Therapy</h2>
                                            <p className='max-w-[384px] text-[14px] md:text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="flex item-center justify-center mx-auto max-w-[480px] relative w-full lg:flex lg:justify-center lg:items-center lg:mx-auto md:flex md:justify-center md:items-center md:mx-auto rounded-3xl">
                        <img className='object-cover min-h-full' src="assets/images/services-image.png" alt="services-image" />
                    </div>

                </div>

            </div>
            </div>
        </div>
    )
}

export default Services