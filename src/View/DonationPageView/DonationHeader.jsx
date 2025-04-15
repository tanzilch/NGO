import Btn from '../../components/UI/Buttons/Btn'

const DonationHeader = () => {
    return (
        <div className='container'>
            <div className='flex flex-col gap-5 xl:flex-row'>
                <div className='flex flex-1'>
                    <div className='max-w-[600px] bg-slate-300 flex flex-col gap-4 md:max-w-full md:gap-2 lg:gap-3'>
                        <div className="flex flex-col-reverse lg:flex-row items-center gap-3 md:gap-2 uppercase text-[14px] font-Roboto font-extrabold">
                            <hr className="flex h-1 bg-[#1D2130]  border-[#1D2130] w-12 " />
                            <h1>Donate</h1>
                        </div>
                        <div className='flex flex-col gap-4 xl:pl-[55px] xl:gap-4 lg:gap-8'>
                            <div className='xl:max-w-[627px] max-w-full'>
                                <h1 className='text-[36px] md:text-[42px] lg:text-[48px] xl:text-[52px] font-Roboto font-extrabold'>Making a donation for our children.</h1>
                            </div>
                            <div className='xl:max-w-[480px] md:max-w-full'>
                                <p className='text-[13px] md:text-[14px] lg:text-[15px] leading-6 xl:leading-7 text-[#525560]'>When you donate, you’re supporting effective care to children with special needs—an investment in the leaders of tomorrow.</p>
                            </div>
                            <Btn className='bg-[#F2C94C] text-[12px] px-4 py-3 lg:text-[13px] lg:px-5 lg:py-3 xl:px-6 xl:py-3 rounded-[4px]'>Donate Now</Btn>
                        </div>
                    </div>
                </div>
                <div className='max-w-[480px] mx-auto md:mx-auto'>
                    <img className='object-cover w-full h-auto' src="assets/images/donationimg.png" alt="what-background" />

                </div>




            </div>
        </div>
    )
}

export default DonationHeader