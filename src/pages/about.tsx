import { AnimatedTestimonialsDemo } from '@/Components/AnimatedTestimonialsDemo'
import { FeaturesSectionDemo} from '@/Components/FeaturesSectionDemo'
import { ImagesSliderDemo } from '@/Components/ImagesSliderDemo'


import Feature  from '@/Components/Feature'
import React from 'react'
import Footer from '@/Components/Footer'

function about() {
  return (
    <div>
      <ImagesSliderDemo/>
      <Feature/>
      <FeaturesSectionDemo/>
      <AnimatedTestimonialsDemo/>
      <Footer />
    
    </div>
  )
}

export default about

