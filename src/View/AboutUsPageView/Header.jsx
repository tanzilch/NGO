

const Header = () => {
    return (
        <div className='container'>
            <div className="flex flex-col gap-3 pt-12 lg:gap-6 xl:flex-col"> {/*inner div of about us component */}
                <div className="flex items-center flex-col-reverse gap-3 md:items-center font-bold text-[16px] lg:flex-row xl:flex-row">
                    <hr className="flex h-1 bg-[#1D2130]  border-[#1D2130] w-12 " />
                    <h1>Know About us</h1>
                </div>
                <div className='flex flex-col gap-3 md:flex-col xl:flex-row'>
                    <div className="flex flex-col items-center xl:pl-[60px] md:flex md:w-full md:pl-0 lg:items-start">

                        <div className='max-w-[718px] text-[38px] font-Roboto font-extrabold md:text-[40px] xl:max-w-[718px] xl:text-[48px]'>
                            <p>We are a non-governmental organization</p>
                        </div>

                    </div>

                    <div className='lg:max-w-[460px] md:max-w-[750px]'>
                        <div className='flex flex-col gap-3 md:gap-5'><p className='text-[20px] font-Roboto font-extrabold text-[#1D2130]'>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                            <p className='text-[16px] font-Roboto leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim elementum tristique.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Header