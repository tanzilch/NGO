import React from 'react'
import DonationHeader from './DonationHeader'
import DonationUse from './DonationUse'
import Contribute from '../../components/Shared/Contribute'
import DonationCaring from './DonationCaring'

const DonationMain = () => {
  return (
    <div className='flex flex-col gap-[30px] pb-[30px] sm:gap-[40px] sm:pb-[40px] md:gap-[50px] md:pb-[50px] lg:gap-[70px] lg:pb-[30px]'>
      <DonationHeader />
      <DonationCaring />
      <DonationUse />
      <Contribute />
    </div>
  )
}

export default DonationMain