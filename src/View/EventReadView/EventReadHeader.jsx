import React from 'react'

const EventReadHeader = () => {
  return (
    <div className='bg-[#FCEDC6]'>
      <div className='container'>
        <div className='flex xl:justify-center py-8 md:py-8 lg:justify-start xl:py-16'>

          <div className='max-w-[768px] flex flex-col gap-6 md:gap-8 lg:gap-10 xl:gap-12'>
            <div className='flex'>
              <h1 className='text-[38px] md:text-[48px] lg:text-[50px] xl:text-[56px] font-Roboto font-extrabold'>A day with our wonderful children</h1>
            </div>

            <div className='max-w-[612px] flex flex-wrap gap-4'>
              <div className='max-w-[392px] flex gap-2'>
                <div className='max-w-[19px]'>
                  <img className='object-cover' src="assets/icons/location.png" alt="location icon" />
                </div>
                <div className='max-w-[364px] text-[12px] md:text-[14px] xl:text-[16px] font-Roboto font-medium text-[#1D2130]'>
                  <p>Opp Opolo round about, Yenagoa, Bayelsa, Nigeria</p>
                </div>
              </div>

              <div className='max-w-[193px] flex gap-2'>
                <div className='max-w-[22px]'>
                  <img src="assets/icons/calendar.png" alt="calendar-image" />
                </div>
                <div className='max-w-[164px]'>
                  <p className='text-[12px] text-[#1D2130] md:text-[14px] xl:text-[16px] font-Roboto font-medium'>April 13, 2022 8:30 AM</p>
                </div>


              </div>

            </div>

          </div>


        </div>


      </div>


    </div>
  )
}

export default EventReadHeader