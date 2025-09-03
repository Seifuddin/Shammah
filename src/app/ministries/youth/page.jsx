import Aboutus from '@/components/AboutUs'
import ContactForm from '@/components/ContactForm'
import ContactFm from '@/components/Contacts'
import HeroSection from '@/components/Hero'
import VisitUs from '@/components/Visit'
import React from 'react'

export default function Youth() {
  return (
    <div className='relative'>
        <HeroSection />
        <Aboutus />
         <ContactFm />
        <VisitUs />
    </div>
  )
}
