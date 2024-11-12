
import { AnimatedTestimonialsDemo } from '@/Components/AnimatedTestimonialsDemo'
import { CardHoverEffectDemo } from '@/Components/CardHoverEffectDemo'
import { ImagesSliderDemo } from '@/Components/ImagesSliderDemo'
import { LayoutGridDemo } from '@/Components/LayoutGridDemo'

import React from 'react'

function about() {
  return (
    <div>
      <ImagesSliderDemo/>
      <LayoutGridDemo/>
      <CardHoverEffectDemo/>
      <AnimatedTestimonialsDemo/>
     
    </div>
  )
}

export default about
