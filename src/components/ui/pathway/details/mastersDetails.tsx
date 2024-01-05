import React from 'react'
import { type Step } from '@/data/pathwaySteps'

type Props = {
  step: Step
}
const MastersDetails = (props: Props) => {
  return (
    <>  
      <p>I obtained my Master's degree in Chemical Engineering in 2013.</p>
      During my studies, I was pulled towards programming at many occasions:
      <ul className='list-disc [&>li]:ml-4 mb-4'>
        <li>I did a 6 months internship, where I used MATLAB to optimize a hydrogen plant calculation and visualisation.</li>
        <li>During the programming class, I enjoyed and excelled working on different projects: Sudoku solver, 2D particles collision simulation - extended into a basic interactive pool game.</li>
      </ul>
        
      <p>
        This way, my connection to programming was kept very much alive.
      </p>
    </>    
  )
}

export default MastersDetails