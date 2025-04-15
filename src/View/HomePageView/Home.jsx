// import React from 'react'
import Header from './Header'
import AboutUs from './AboutUs'
// import Services from './WhatWeDo'
// import Supporters from '../../components/Shared/Supporters'
import Projects from './Projects'
import Donations from './Donations'

import Events from '../../components/Shared/Events'
import Contribute from '../../components/Shared/Contribute'
import WhatWeDo from './WhatWeDo'


const Home = () => {
    return (
        <div className='flex flex-col gap-[30px] pb-[30px] sm:gap-[40px] sm:pb-[40px] md:gap-[50px] md:pb-[50px] lg:gap-[70px] lg:pb-[30px]'>
            <Header />
            <AboutUs />
            <WhatWeDo />
            <Projects />
            <Donations />
            <Contribute />
            <div className="container flex flex-col items-center gap-5 font-[#1D2130] font-Roboto-500 text-[28px] md:text-[30px] font-semibold md:flex md:flex-col md:items-center md:gap-4 lg:text-[34px] xl:flex xl:flex-row xl:items-center">
                <h2>Our Events</h2>
                <hr className="w-full flex xl-flex xl:w-[82%] bg-[#E5E5E5] items-center" />
            </div>
            <div className='flex flex-row container lg:justify-center xl:justify-start gap-10 '>
            <div className='flex flex-col xl:flex-row lg:max-w-[768px] xl:max-w-full w-full justify-between gap-8'>
            <Events date='13' month='Apr' heading='A Day with our wonderful children' />
            <Events date='22' month='Apr' heading='Seminar: Caring for children with autism' />
            </div>
            </div>
            

        </div>
    )
}

export default Home