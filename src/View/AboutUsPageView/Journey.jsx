import React from 'react'

const Journey = () => {
    return (
        <div className='container '>
            <div className='flex bg-[#F2C94C] flex-col-reverse  py-4   gap-12 px-5 rounded-lg md:flex-col-reverse  md:py-8 md:gap-8 lg:items-center xl:flex-row  xl:pl-20 xl:py-12'>
                <div className='max-w-[480px] rounded-[20px] flex flex-col gap-5 md:max-w-[600px] xl:max-w-[480px] '>
                    <div className=''><h1 className='uppercase text-[13px] gap-4 lg:text-[16px] font-extrabold'>our mission</h1>
                        <h2 className='text-[32px] lg:text-[38px] xl:text-[46px] font-Roboto font-extrabold'>How we raised 34M</h2>
                        <p className='text-[13px] lg:text-[14px] xl:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh.</p>
                    </div>

                    <div className='max-w-[285px] flex justify-between'>
                        <div className='flex flex-col max-w-[101px]'>
                            <h2 className='text-[16px] lg:text-[18px] xl:text-[22px] font-medium'>34M+</h2>
                            <p className='text-[10px] lg:text-[12px]'>Donation Received</p>
                        </div>

                        <div className='max-w-[52px]'>
                            <h2 className='text-[16px] lg:text-[18px] xl:text-[22px] font-medium'>400+</h2>
                            <p className='text-[10px] lg:text-[12px]'>Volunters</p>
                        </div>

                        <div className='max-w-[65px]'>
                            <h2 className='text-[16px] lg:text-[18px] xl:text-[22px] font-medium'>20+</h2>
                            <p className='text-[12px]'>Care homes</p>
                        </div>

                    </div>
                </div>
                <div className='max-w-[612px] mx-auto flex xl:max-w-[612px]'>
                    <img className='object-cover md:max-w-full max-h-full' src="assets/images/journey.png" alt="journey image" />
                </div>
            </div>

        </div>
    )
}

export default Journey