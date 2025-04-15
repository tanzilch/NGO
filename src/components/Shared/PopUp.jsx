// Modal.js
import React from 'react';
import ContactForm from '../../View/ContactPageView/ContactForm';

const Modal = ({ isOpen, onClose }) => {
    return (
        <>
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 md:p-8 lg:p-12 xl:p-16 rounded-md shadow-md w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Join as Volunteer</h2>
                        <ContactForm widthClass='px-0' btnProps='px-6 py-4 text-[14px] flex justify-start' />
                        <button
                            onClick={onClose}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
