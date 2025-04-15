import React from 'react'
import Btn from '../../components/UI/Buttons/Btn'

const MediaHeader = () => {
    return (
        <div className='bg-[#FCEDC6]'>
            <div className='container'>
                <div className='flex flex-col py-8 gap-6 xl:py-16 md:py-10 md:gap-8 xl:flex-row xl:justify-between'>
                    <div className='flex flex-1'>
                        <div className='flex max-w-[592px] flex-col gap-4 md:gap-5 lg:gap-8'>
                            <div className="flex flex-col-reverse items-center uppercase md:items-center gap-2 lg:gap-4 font-bold text-[14px] md:text-[15px] lg:text-[16px] lg:flex lg:flex-row">
                                <hr className="flex h-1 bg-[#1D2130]  border-[#1D2130] w-14 lg:w-20 " />
                                <h1>Top news</h1>
                            </div>
                            <div className='max-w-[496px] flex flex-col gap-4 md:max-w-full xl:gap-8'>
                                <h1 className='text-[30px] font-Roboto font-extrabold md:text-[42px] lg:text-[46px] xl:text-[50px]'>Our goal is to provide inclusive care for children with special needs</h1>
                                <p className='text-[14px] md:text-[15px] lg:text-[16px] text-[#525560] max-w-[496px]'>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                            </div>
                            <Btn className='bg-[#F2C94C] text-[12px] px-6 py-3 md:text-[14px] lg:px-8 lg:py-4 rounded-[4px] md:px-6 md:py-3 xl:text-[15px] xl:px-8 xl:py-4'>Read more</Btn>

                        </div>
                    </div>


                    <div className='xl:max-w-[592px] flex flex-col justify-center items-center bg-white rounded-xl py-6 xl:pl-6 md:justify-start md:max-w-full'>
                        <div className='max-w-[512px] flex flex-col gap-8  md:max-w-full md:flex-row md:justify-center md:gap-14 md:flex-wrap lg:flex-nowrap xl:flex-col xl:gap-8'> {/*inner div of media header right section */}
                            <div className='max-w-[512px] flex flex-col items-center gap-3 xl:pr-[13px] xl:flex-row '>  {/*inner 1st div of media header right section */}
                                <div className='max-w-[192px]'>
                                    <img className='mx-auto' src="assets/images/autism.png" alt="autism" />
                                </div>
                                <div className='max-w-[296px] flex flex-col gap-1 md:gap-2 justify-center items-center xl:items-start'>
                                    <h1 className='text-[16px] md:text-[17px] xl:text-[18px] font-Roboto text-[#1D2130] font-extrabold'>Autism care day</h1>
                                    <h2 className='max-w-[296px]  text-[10px] md:text-[11px]lg:text-[12px] font-Roboto font-extrabold text-[#1D2130]'>15th Nov 2022</h2>
                                    <p className='text-[12px] text-center lg:text-[13px] xl:text-[14px] font-Roboto leading-5 lg:leading-6 xl:text-start '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                                </div>
                            </div>


                            <div className='max-w-[512px] flex flex-col items-center gap-3 lg:pr-[13px] xl:flex-row'>  {/*inner 2nd div of media header right section */}

                                <div className='max-w-[192px]'>
                                    <img className='max-w-[192px] mx-auto' src="assets/images/baby.png" alt="autism" />
                                </div>
                                <div className='max-w-[296px] flex flex-col gap-1 md:gap-2 justify-center items-center xl:items-start'>
                                    <h1 className='text-[16px] md:text-[17px] xl:text-[18px] font-Roboto text-[#1D2130] font-extrabold'>Down syndrome outreach</h1>
                                    <h2 className='max-w-[296px] text-[10px] md:text-[11px] lg:tet-[12px] font-Roboto font-extrabold text-[#1D2130]'>15th Nov 2022</h2>
                                    <p className='text-[12px] md:text-[13px] xl:text-[14px] text-center font-Roboto leading-5 lg:leading-6 xl:text-start '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                                </div>
                            </div>


                            <div className='max-w-[512px] flex flex-col items-center gap-3 lg:pr-[13px] xl:flex-row'>  {/*inner 3rd div of media header right section */}
                                <div className='max-w-[192px]'>
                                    <img className='max-w-[192px] mx-auto' src="assets/images/care-child.png" alt="autism" />
                                </div>
                                <div className='max-w-[296px] flex flex-col gap-1 md:gap-2 justify-center items-center xl:items-start'>
                                    <h1 className='text-[16px] text-center md:text-[17px] xl:text-[18px] font-Roboto text-[#1D2130] font-extrabold xl:text-start'>Caring for children with cerebral palsy</h1>
                                    <h2 className='max-w-[296px] text-[10px] md:text-[11px] lg:tet-[12px] font-Roboto font-extrabold text-[#1D2130]'>15th Nov 2022</h2>
                                    <p className='text-[12px] md:text-[13px] xl:text-[14px] text-center font-Roboto leading-5 lg:leading-6 xl:text-start '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default MediaHeader