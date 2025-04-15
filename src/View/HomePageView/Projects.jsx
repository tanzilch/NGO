import React from 'react'
import Card from '../../components/UI/Card'

const Projects = () => {
    const cardsData = [
        {
            bgImage: '/assets/images/card1Bg.png',
            heading: 'Mission smile 1k: Outdoor charity',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',

        },
        {
            bgImage: '/assets/images/card2Bg.png',
            heading: 'Weekly excursions',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',

        },
        {
            bgImage: '/assets/images/card3Bg.png',
            heading: 'Monthly public awareness',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',

        },
    ];
    return (
        <div className='container'>
            <div className='flex flex-col'>
                <div className='flex flex-col-reverse items-center text-[16px]  gap-4 font-bold lg:flex md:flex-row'>
                    <hr className="flex h-1  bg-[#1D2130]  border-[#1D2130]  w-16 " />
                    <h2 className='capitalize'>Projects we have done</h2>
                </div>
                <div className='max-w-[630px] text-[31px] pt-[20px] pb-[30px] xl:pl-20 md:text-[45px] font-extrabold font-Roboto pl-0 md:gap-6'>
                    <h2>We are creating a place where children with special needs can thrive</h2>
                </div>
                <div className="flex justify-center">
                    <div className=' flex flex-col gap-5 md:flex md:flex-wrap  xl:w-full md:gap-10 lg:flex lg:flex-row lg:flex-wrap  lg:gap-10 lg:justify-center xl:grid xl:grid-cols-3 xl:gap-4'>
                        {cardsData.map((card, index) => (
                            <div key={index}>
                                <Card {...card} />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Projects