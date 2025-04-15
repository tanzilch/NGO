import React from 'react'
import Modal from './PopUp';
import { useState } from 'react';
import Btn from '../UI/Buttons/Btn'

const Contribute = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className='container'>
            <div className='flex flex-col gap-10 rounded-xl items-center bg-cover bg-center justify-center max-w-[1280px] py-10 lg:py-14' style={{ backgroundImage: `url('assets/images/contributeBg.png')` }}>
                <div className='flex max-w-[800px]'>
                    <p className='text-[34px] md:text-[44px] lg:text-[46px] text-[#fff] font-Roboto font-extrabold text-center xl:text-[48px]'>
                        You can contribute to provide a place for children with special needs!
                    </p>
                </div>
                <div className='flex flex-col-reverse items-center justify-center gap-4 md:flex-row'>
                    <Btn onClick={openModal} className='bg-[#F2C94C] rounded-md  px-[20px] py-[10px] font-medium text-[14px] font-Roboto md:px-[28px] md:py-[14px]'>Join as volunteer</Btn>
                    <Modal isOpen={isModalOpen} onClose={closeModal} />
                    <Btn className='bg-white text-[12px] rounded-md font-medium px-[28px] py-[10px] md:px-[28px] md:py-[14px]'>Donate</Btn>
                </div>
            </div>

        </div>

    )
}

export default Contribute