import React from 'react'
import { type Step } from '@/data/pathwaySteps'

type Props = {
  step: Step
}
const MastersDetails = (props: Props) => {
  return (
    <>  
      <p>Chemical engineering Master's degree in 2013.</p>
      <p>6 months internship - Software development in MATLAB for optimizing a hydrogen plant.</p>
    </>    
  )
}

export default MastersDetails