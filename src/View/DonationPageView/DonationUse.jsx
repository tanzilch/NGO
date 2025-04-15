import React from 'react'

const DonationUse = () => {
    return (
        <div className='container'>
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-5 md:grid-cols-1'>
                <div className='max-w-[374]'>
                    <h2 className='text-[32px] md:text-[42px] lg:text-[44px] xl:text-[46px] xl:mt-[-14px] font-Roboto font-extrabold '>How we use your donation</h2>
                </div>

                <div className='lg:max-w-[338px] max-w-full'>
                    <p className='text-[#525560] text-[16px] md:text-[15px] xl:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.  Nunc ut sem vitae risus tristique posuere.</p>
                </div>

                <div className='lg:max-w-[374px] max-w-full'>
                    <p className='text-[16px] text-[#525560] md:text-[15px] xl:text-[16px]'>
                        Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                    </p>


                </div>
            </div>

        </div>
    )
}

export default DonationUse