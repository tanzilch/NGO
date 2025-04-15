import React from 'react'

const ContactHeader = () => {
    return (
        <div className='bg-[#FCEDC6]'>
            <div className='container'>
                <div className='flex flex-col py-10 gap-6 xl:py-20 xl:gap-20 md:gap-10 md:py-10 md:flex-col xl:flex-row'>  {/*left side div of contact header section (start) */}
                    <div className='flex flex-col gap-7'>
                        <div className="flex flex-col-reverse md:flex-row items-center uppercase  gap-2 lg:gap-4 font-bold text-[13px] md:text-[15px] lg:text-[16px] lg:flex lg:flex-row">
                            <hr className="flex h-1 bg-[#1D2130] border-[#1D2130] w-14 lg:w-20 " />
                            <h1>Contact Us</h1>
                        </div>
                        <div className='xl:max-w-[520px] max-w-full xl:pl-[95px] flex flex-col gap-2'>
                            <h1 className='lg:text-[48px] md:text-[42px] text-[36px] font-Roboto font-extrabold'>We'd love to hear from you</h1>
                            <p className=' text-[13px] lg:text-[15px] text-[#1D2130] leading-6 md:text-[14px] '>Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details.</p>
                        </div>
                    </div>{/*left side div of contact header section (End) */}

                    <div className='xl:max-w-[325px] w-full flex flex-wrap gap-6 xl:gap-[40px] md:gap-[0px] md:max-w-full md:justify-between md:flex-row xl:flex-col'>  {/*right side div of contact header section (start) */}
                        <div className='max-w-[325px] flex flex-col gap-1 border-b-[1px] border-b-[
#E5E5E5] pb-2'>{/*First inner div of right side header div(start)*/}
                            <h1 className=' max-w-[102px]  text-[16px] lg:text-[19px] md:text-[18px] font-Roboto font-extrabold'>Let's talk! </h1>

                            <div className='max-w-[325px]  flex flex-col md:items-start  md:gap-1 md:flex-col'>
                                <p className='max-w-[140px] text-[12px] lg:text-[15px] text-[#1D2130]'>+234 09012346514</p>
                                <p className='max-w-[160] text-[12px] lg:text-[15px] text-[#1D2130]'>hello@largerthani.com</p>
                            </div>

                        </div>
                        <div className='max-w-[325px] flex flex-col gap-1'>{/*second inner div of right side header div(start)*/}
                            <h1 className=' max-w-[102px] text-[16px] md:text-[18px] lg:text-[19px] font-Roboto font-extrabold'>Headoffice</h1>

                            <div className='max-w-[325px] flex flex-col'>
                                <p className='max-w-[160px] text-[12px] lg:text-[15px] text-[#525560]'>8 Brewery Drive, Lagos, </p>
                                <p className='max-w-[160] text-[12px] lg:text-[15px] text-[#525560]'>Nigeria.</p>
                            </div>
                        </div>

                        <div className='max-w-[302px] flex flex-col gap-1'>{/*Third inner div of right side header div(start)*/}
                            <h1 className=' max-w-[170px] text-[16px] md:text-[18px] lg:text-[19px] font-Roboto font-extrabold'>Branch Office </h1>

                            <div className='max-w-[302px] flex flex-col'>
                                <p className='max-w-full text-[12px] lg:text-[15px] text-[#525560]'>Opp Opolo round about, Yenagoa, Bayelsa,</p>
                                <p className='max-w-[160]  text-[12px] lg:text-[15px] text-[#525560]'>Nigeria</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactHeader