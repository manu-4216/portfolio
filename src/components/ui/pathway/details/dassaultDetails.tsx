import React from 'react'
import { type Step } from '@/data/pathwaySteps'

type Props = {
  step: Step
}
const MainframeDetails = (props: Props) => {
  return (
    <>  
      <p>In this first role as Front-End Developer, I practiced the Web fundamentals: Vanilla JavaScript, DOM API, cross-browser CSS, HTML events (delegation, capturing).</p>
      <p>But I wanted to work for a smaller company, and use React...</p>
    </>    
  )
}

export default MainframeDetails