import React from 'react'

const Events = ({ date, month, heading, imgSrc ='assets/icons/arrowBtn.png'}) => {
  return (
      
      <div className='flex flex-col md:flex-col gap-5'>
          
      {/*First event Card*/}
          <div className='flex px-5 py-5 md:px-10 md:py-8 lg:py-10 xl:py-12 xl:px-8  gap-4  w-full  xl:w-full rounded-xl bg-[#F2C94C]'>
            <div className='flex justify-around items-center gap-3 w-full '>
              <div className='flex md:flex w-full gap-4 md:gap-5'>      {/*First two inner divs of card 1 of event Card*/}
                <div className='flex items-center flex-col'>
                  <h1 className=' text-[28px] md:text-[32px] lg:text-[38px]'>{date}</h1>
                  <h2 className='text-[13px] md:text-[14px] lg:text-[15px]'>{month}</h2>
                </div>
                <div className='flex md:gap-16 justify-between lg:justify-between w-full'>
              <div className='flex flex-col'>
                <div className='flex  items-center text-[12px] md:flex md:flex-row md:gap-4 md:text-[14px] tracking-widest font-Roboto font-extrabold gap-2 uppercase'>
                  <h2>Next Events</h2>
                  <hr className='h-1 w-[20%] bg-black' />
                </div>

                <div className=':max-w-[300px]  text-[18px] font-Roboto md:text-[24px] lg:text-[24px] xl:text-[25px] font-extrabold'>
                  <h3>{heading}</h3>
                  </div>
                  </div>
                  <div className='flex items-center justify-center'>
                    <img className=' max-w-[40px] lg:max-w-[56px] min-w-[30px] w-full' src={imgSrc} alt="arrow-image" />
                  </div>
                </div>
              </div>
            </div>

          </div>
       



        </div>
  )
}

export default Events