import React from 'react'

const Awards = () => {
    return (
        <div className='container'>
            <div className='max-w-[1115px] px-20 flex flex-col items-center gap-5 md:gap-6 lg:gap-6'>
                <div className='max-w-[500px] flex text-[18px] md:text-[32px] lg:text-[42px] items-center font-Roboto font-extrabold'>
                    <h2>Awards & Recognitions</h2>
                </div>

                <div className=" w-full flex flex-wrap justify-center gap-14 md:flex-wrap md:gap-16 lg:justify-between xl-flex xl:justify-between">
                    <img src="assets/images/Award.png" alt="award-image" />
                    <img src="assets/images/Award.png" alt="award-image" />
                    <img src="assets/images/Award.png" alt="award-image" />
                    <img src="assets/images/Award.png" alt="award-image" />
                </div>
            </div>
        </div>
    )
}

export default Awards