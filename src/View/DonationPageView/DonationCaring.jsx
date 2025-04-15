import React from 'react'

const DonationCaring = () => {

    const listMenu = [
        { id: 1, text: "OverView", link: "/" },
        { id: 2, text: "Impact", link: "/" },
        { id: 3, text: "What you get", link: "/" },
    ]
    return (
        <div className='container'>
            <div className='flex flex-col-reverse gap-4 xl:gap-10 md:gap-6 md:flex-col-reverse xl:flex-row'>
                <div className='max-w-[592px] w-full md:max-w-full flex flex-col gap-3 md:gap-4 lg:gap-6'>
                    <h2 className='lg:text-[48px] text-[32px] md:text-[42px] font-Roboto font-extrabold'>How you can contribute to caring for our kids</h2>
                    <p className='lg:text-[16px] md:text-[14px] text-[14px] text-[#525560]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                </div>

                <div className='max-w-[592px] md:max-w-full flex flex-col gap-5 lg:justify-start xl:justify-center  w-full '>
                    <ul className="flex items-center flex-wrap">
                        {listMenu.map((item) => (
                            <li key={item.id} className='px-4 py-2 border-b-[1px] border-black'>
                                <a
                                    href={item.link}
                                    className="text-[#525560] font-medium text-[16px] sm:text-[13px] md:text-[16px] lg:text-[16px]"
                                >
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className='flex flex-col gap-8'>
                        <p className='lg:text-[16px] text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. </p>

                        <p className='text-[14px] lg:text-[16px] '>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                    </div>

                </div>

            </div>
        </div>



    )
}

export default DonationCaring