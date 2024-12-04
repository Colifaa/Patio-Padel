import { FeaturesSectionDemo} from '@/Components/FeaturesSectionDemo'
import { ImagesSliderDemo } from '@/Components/ImagesSliderDemo'

import  FAQSection  from "../Components/FAQSection"

import Feature  from '@/Components/Feature'
import React from 'react'
import Footer from '@/Components/Footer'

function about() {
  return (
    <div>
      <ImagesSliderDemo/>
      <Feature/>
      <FeaturesSectionDemo/>
      <FAQSection/>
      <Footer />
    </div>
  )
}

export default about

