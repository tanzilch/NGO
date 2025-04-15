import React from 'react'
import TeamComponent from '../../components/Shared/TeamComponent'

const OurTeam = () => {
  return (
    <div className='container'>
      <div className='flex flex-col justify-center items-center gap-6  lg:gap-8 xl:gap-10'>
        <div className='max-w-[520px] flex flex-col gap-4 items-center'>
          <h2 className=' text-[34px] md:text-[40px] lg:text-[42px] xl:text-[48px] font-Roboto font-extrabold'>Meet our team</h2>
          <p className='text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] text-[#525560] font-Roboto text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        </div>
        <TeamComponent />
      </div>

    </div>
  )
}

export default OurTeam