import React from 'react'
import { type Step } from '@/data/pathwaySteps'

type Props = {
  step: Step
}
const AboutMeDetails = (props: Props) => {
  return (
    <>  
      <p>
        Hi, I'm Manuel. Welcome to my page dedicated to my programming journey.
      </p>
      <p>
        <div>I am a software engineer with a track record in delivering high quality software: scalable and responsive CSS, clean JavaScript, accessible markup.</div>
        <div>I am capable to build end to end features using fullstack JavaScript, and other problem solving skills.</div>
      </p>
      <p>
        How did I get here ? Let me tell you my story...
      </p>
    </>    
  )
}

export default AboutMeDetails