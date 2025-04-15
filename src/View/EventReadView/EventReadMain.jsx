import React from 'react'
import EventReadHeader from './EventReadHeader'
import EventAbout from './EventAbout'
import Events from '../../components/Shared/Events'

const EventReadMain = () => {
  return (
    <div className='flex flex-col gap-[30px] pb-[30px] sm:gap-[40px] sm:pb-[40px] md:gap-[50px] md:pb-[50px] lg:gap-[70px] lg:pb-[30px]'>
      <EventReadHeader />
      <EventAbout />
      <div className='container'>

        <div className='flex-flex-col bg-slate-300'>

          <div className="flex flex-col items-center gap-5 font-[#1D2130] font-Roboto-500 text-[28px] md:text-[30px] font-semibold md:flex md:flex-col md:items-center md:gap-4 lg:text-[34px] xl:flex xl:flex-row xl:items-center">
            <h2>Our Events</h2>
            <hr className="w-full flex xl-flex xl:w-[82%] bg-[#E5E5E5] items-center" />
          </div>
          <div className='flex justify-center gap-10 pt-10 '>
            <div className='flex flex-col max-w-[768px] w-full gap-8'>
              <Events date='13' month='Apr' heading='A Day with our wonderful children' />
              <Events date='22' month='Apr' heading='Seminar: Caring for children with autism' />
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default EventReadMain