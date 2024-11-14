import { AnimatedTestimonialsDemo } from '@/Components/AnimatedTestimonialsDemo'
import { FeaturesSectionDemo} from '@/Components/FeaturesSectionDemo'
import { ImagesSliderDemo } from '@/Components/ImagesSliderDemo'


import Feature  from '@/Components/Feature'
import React from 'react'

function about() {
  return (
    <div>
      <ImagesSliderDemo/>
      <Feature/>
      <FeaturesSectionDemo/>
      <AnimatedTestimonialsDemo/>
    
    </div>
  )
}

export default about

