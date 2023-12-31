import React from 'react'
import { type Step } from '@/data/pathwaySteps'

type Props = {
  step: Step
}
const EducationDetails = (props: Props) => {
  const { shortTitle, content, tags, type, featured } = props.step

  return (
    <>  
      <p>
        Informatic, basics, chemistry
      </p>
    </>    
  )
}

export default EducationDetails