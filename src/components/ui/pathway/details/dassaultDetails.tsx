import React from 'react'
import { type Step } from '@/data/pathwaySteps'

type Props = {
  step: Step
}
const MainframeDetails = (props: Props) => {
  return (
    <>  
      <p>Shortly after freeCodeCamp graduation, I got my first job as a Front-End Developer. It was a huge milestone for me to get employed by a leading software company in France, and be part of one of their teams.</p>
      <p>In this role, I practiced the Web fundamentals: Vanilla JavaScript, DOM API, cross-browser CSS, HTML events (delegation, capturing).</p>
      <p>But my journey wasn't complete, since I wanted to work for a startup, and use React...</p>
    </>    
  )
}

export default MainframeDetails