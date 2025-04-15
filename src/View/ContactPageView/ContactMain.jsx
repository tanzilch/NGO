import React from 'react'
import ContactHeader from './ContactHeader'
import ContactForm from './ContactForm'
import ContactMap from './ContactMap'

const ContactMain = () => {
  return (
    <div className='flex flex-col gap-[30px] pb-[30px] sm:gap-[40px] sm:pb-[40px] md:gap-[50px] md:pb-[50px] lg:gap-[70px] lg:pb-[30px]'>
      <ContactHeader />
      <ContactForm />
      <ContactMap />
      </div>
  )
}

export default ContactMain