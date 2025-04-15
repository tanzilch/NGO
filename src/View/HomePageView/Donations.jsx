import React from 'react'

const Donations = () => {
    return (
        <div className='bg-[#000000]'>
        <div className='max-w-[1500px] container  font-Roboto text-white'>
            <div className='flex flex-col items-center max-w-[1280px] gap-8 py-10  xl:py-[60px] md:py-[40px] md:flex-col md:gap-6 md:items-start lg:gap-12 xl:flex-row'>  {/*inner div of donations component */}
                <div className='flex flex-1'>       {/*content div of donations component */}
                    <div className='max-w-[640px] gap-6 flex flex-col md:gap-8 md:pt-4'>        {/*inner div of content div*/}
                        <div className='max-w-[626px] flex flex-col gap-6'> {/*heading div of inner content div*/}
                            <h1 className='text-[34px] md:text-[42px] lg:text-[44px] xl:text-[48px] font-extrabold'>How we spend your donations and where it goes</h1>
                            <p className='text-[15px] md:text-[14px] lg:text-[15px] xl-text-[16px]'>We understand that when you make a  donation, you want to know exactly where your money is going and we pledge to be transparent.</p>
                        </div>

                        <div className='max-w-[632px] flex flex-wrap justify-start gap-9 md:grid md:grid-cols-3  md:grid-auto-flow md:gap-6'>{/* categories div of content div inner of donations component*/}
                            <div className='flex items-center gap-1'>{/* first div of content div inner of donations component*/}
                                <img className='max-w-[15px]' src="assets/icons/green.png" alt="green-icons" />
                                <div className='text-[14] lg:text-[15px]'>40% child care home</div>
                            </div>

                            <div className='flex items-center gap-1'>{/* first div of content div inner of donations component*/}
                                <img className='max-w-[15px]' src="assets/icons/purple.png" alt="green-icons" />
                                <div className='text-[14] lg:text-[15px]'>35% cleanliness program</div>
                            </div>

                            <div className='flex items-center gap-1'>{/* third div of content div inner of donations component*/}
                                <img className='max-w-[15px]' src="assets/icons/skin.png" alt="skin-image" />
                                <div className='text-[14px] lg:text-[15px]'>10% helping people</div>
                            </div>
                            <div className='flex items-center gap-1'>{/* fourth div of content div inner of donations component*/}
                                <img className='max-w-[15px]' src="assets/icons/yellow.png" alt="" />
                                <div className='text-[14px] lg:text-[15px]'>10% excursions</div>
                            </div>
                            <div className='flex items-center gap-1'>{/* fifth div of content div inner of donations component*/}
                                <img className='max-w-[15px]' src="assets/icons/pink.png" alt="pink-image" />
                                <div className='text-[14px] lg:text-[15px]'>5% feeding the poor</div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='flex max-w-[375px] justify-center mx-auto'>       {/*image div of donations component */}
                    <img src="assets/images/chart.png" alt="chart-image" />
                </div>
            </div>
        </div>
        </div>
    )
}


export default Donations
