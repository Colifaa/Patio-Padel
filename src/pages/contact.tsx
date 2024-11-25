import Contact from '@/Components/Contact'
import { WobbleCardDemo } from '@/Components/WobbleCardDemo'
import React from 'react'
import ContactInfo from '@/Components/ContactInfo'
import Footer from '@/Components/Footer'

function contact() {
  return (
    <div>
      <Contact />
      <WobbleCardDemo />
      <ContactInfo />
      <Footer />
    </div>
  )
}

export default contact
