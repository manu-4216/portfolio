import React from 'react'
import { type Step } from '@/data/pathwaySteps'

type Props = {
  step: Step
}
const MastersDetails = (props: Props) => {
  return (
    <>  
      <p>I obtained my Chemical engineering Master's degree in 2013.</p>
      During my studies, I was pulled towards programming at many occasions:
      <ul className='list-disc [&>li]:ml-4 mb-4'>
        <li>I did a 6 months internship, where I used MATLAB to optimizing a hydrogen plant calculation and visualisation.</li>
        <li>During the programming class, I enjoyed and excelled working on different projects: Sudoky solver, particle simulation - extended into a pool game simulation</li>
      </ul>
        
      <p>
        This way, my connection to programming was kept very much alive.
      </p>
    </>    
  )
}

export default MastersDetails