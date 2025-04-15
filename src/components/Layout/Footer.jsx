import React from 'react'
import Btn from '../UI/Buttons/Btn';

const Footer = () => {
    const footerMenu1 = [
        { id: 1, text: "Home", link: "/" },
        { id: 2, text: "About Us", link: "/about" },
        { id: 3, text: "Team", link: "/team" },
        { id: 4, text: "Media", link: "/media" },
        { id: 5, text: "Contact", link: "/contact" },
    ];

    const footerMoreMenu = [
        { id: 1, text: "More", link: "/" },
        { id: 2, text: "projects", link: "/projects" },
        { id: 3, text: "events", link: "/events" },
        { id: 4, text: "donations", link: "/donations" },
    ];

    const footerSocialMeadia = [
        { id: 1, text: "Connect", link: "/" },
        { id: 2, text: "Facebook", link: "https://www.facebook.com/" },
        { id: 3, text: "Instagram", link: "https://www.instagram.com/" },
        { id: 4, text: "Twitter", link: "https://twitter.com/" },
        { id: 5, text: "LinkedIn", link: "https://www.linkedin.com/" },
    ];

    


    return (
        <div className='bg-[#0B0706]'>
            <div className='container flex flex-col py-4 gap-8 md:gap-10  md:py-6 xl:flex xl:flex-row'>{/* inner div of footer component*/}
                <div className='flex gap-6 flex-col xl:flex-1 xl:gap-14 xl:py-16 md:gap-10 md:flex-col lg:flex-col xl:flex-row'>
                    <div className='flex text-[20px] md:text-[26px] xl:flex xl:text-[26px] text-[#fff] font-Roboto font-extrabold'><h2>Largerthan</h2><span className='text-[20px] md:text-[26px] xl:text-[26px] font-Courgette font-extrabold'>i</span></div>
                    <div className='flex flex-wrap  md:flex-row lg:flex-row pt-2 gap-[50px]  xl:gap-[90px] md:gap-[180px] lg:gap-[180px]'><ul className="flex flex-col gap-[10px] md:gap-[16px] lg:gap-[20px] ">
                        {footerMenu1.map((item) => (
                            <li key={item.id} className={item.id === 1 ? 'font-bold' : ''}>
                                <a
                                    href={item.link}
                                    className="text-[#fff] text-[14px] md:text-[16px]"
                                >
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>

                        <ul className="flex flex-col gap-[10px] md:gap-[16px] lg:gap-[20px]">
                            {footerMoreMenu.map((item) => (
                                <li key={item.id} className={item.id === 1 ? 'font-bold' : ''}>
                                    <a
                                        href={item.link}
                                        className="text-[#fff] text-[14px]  md:text-[16px]"
                                    >
                                        {item.text}
                                    </a>
                                </li>
                            ))}

                        </ul>

                        <ul className="flex flex-col gap-[10px] md:gap-[16px] lg:gap-[20px]">
                            {footerSocialMeadia.map((item) => (
                                <li key={item.id} className={item.id === 1 ? 'font-bold' : ''}>
                                    <a href={item.link} className="text-[#fff] text-[14px]  md:text-[16px]">{item.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='w-full xl:py-16 md:py-6 md:w-full xl:w-[40%]'>
                    <div className='flex flex-col gap-3 xl:gap-[60px] md:gap-[20px]'>
                        <div className='max-w-[440px] text-[#fff] text-[22px] xl:text-[40px] font-Roboto font-extrabold md:text-[32px] md:font-Roboto md:font-extrabold '>
                            <p>Subscribe to get latest updates</p>
                        </div>

                        <label className='flex flex-col relative md:flex-row md:w-[70%] lg:w-[55%] md:relative lg:relative xl:w-full'>
                            <input
                                className='border max-w-[460px] w-full border-gray-300 border-opacity-30 px-[12px] py-[10px] md:w-[87%] lg:w-[90%] md:px-[15px] md:py-[12px] md:text-[14px] rounded-md bg-[#0B0706] text-[#EBF0F94D]'
                                type="text"
                                placeholder='Your email'
                            />
                            <Btn
                                className='bg-[#fff] mt-3 md:mt-0 md:absolute md:bottom-0 md:right-0 md:top-0 px-[16px] py-[8px] md:py-[12px] md:px-[28px] rounded-md text-[14px]'
                            >
                                Subscribe
                            </Btn>
                        </label>



                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer