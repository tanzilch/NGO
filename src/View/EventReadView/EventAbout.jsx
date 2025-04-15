import React from 'react'
import Events from '../../components/Shared/Events'

const EventAbout = () => {
    return (
        <div className='container'>
            <div className='flex justify-center items-center  flex-col'>
                <div className='max-w-[768px] flex flex-col gap-5'>
                    <h2 className='text-[36px] md:text-[42px] lg:text-[44px] xl:text-[46px] text-center lg:text-left font-Roboto font-extrabold'>About</h2>
                    <div className='max-w-[768px]'>
                        <div className='flex flex-col gap-3 md:gap-5 lg:gap-6 xl:gap-8'>
                            <p className='text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] text-[#525560] font-Roboto leading-6'>Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.</p>
                            <div className='flex flex-col gap-1'>
                                <p className='text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]  text-[#525560] leading-6 font-Roboto'>Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras.</p>

                                <p className='text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]  leading-6 text-[#525560] font-Roboto'>Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque tempor ornare tristique. Integer faucibus duis praesent tempor feugiat ornare in. Erat libero egestas porttitor nunc pellentesque mauris et pulvinar eget.</p>

                            </div>
                        </div>
                    </div>

                    <div className='max-w-[768px]'>
                        <img src="assets/images/aboutimg.png" alt="about-img" />
                    </div>

                    <div className='flex'>
                        <p className='text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]  text-[#525560] font-Roboto leading-6'>Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EventAbout