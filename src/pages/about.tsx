import { AnimatedTestimonialsDemo } from '@/Components/AnimatedTestimonialsDemo'
import { FeaturesSectionDemo} from '@/Components/FeaturesSectionDemo'
import { ImagesSliderDemo } from '@/Components/ImagesSliderDemo'
import AboutUs  from '@/Components/AboutUs'


import React from 'react'

function about() {
  return (
    <div>
      <ImagesSliderDemo/>
      <AboutUs/>
      <FeaturesSectionDemo/>
      <AnimatedTestimonialsDemo/>

    </div>
  )
}

export default about

