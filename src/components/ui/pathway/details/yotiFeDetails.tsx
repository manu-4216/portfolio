import React from 'react'
import { type Step } from '@/data/pathwaySteps'

type Props = {
  step: Step
}
const YotiDetails = (props: Props) => {
  return (
    <>  
      <p>
        Main contributor to all stages of a React web app: initial setup, scale-up, addressing tech debt, supporting new joiners, and finally handover.
      </p>

      <p>
        Worked within a dynamic Agile team to build hight quality React app
        <ul className='list-disc [&>li]:ml-4'>
          <li>high quality React app</li>
          <li>high confidence unit tests (Jest, Testing Library)</li>
          <li>other details: dynamic Agile team, Express.js, Storybook, CSS modules</li>
        </ul>
      </p>

      <p>As senior frontend developer:
        <ul className='list-disc [&>li]:ml-4'>
          <li>Excellent communication, to ensure best and pragmatic solution is chosen, and refined.</li>
          <li>Major contributor to front-end architecture reviews, proposing ways for improving the codebase.</li>
          <li>Implemented a developer-driven process for addressing tech debt continuously, which boosted developer productivity.</li>
        </ul>
      </p>
   </>    
  )
}

export default YotiDetails