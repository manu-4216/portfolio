import React from 'react'
import { type Step } from '@/data/pathwaySteps'

type Props = {
  step: Step
}
const HighSchoolDetails = (props: Props) => {
  return (
    <> 
      <p>
        My first contact with Computer Sciences was in high school, which was Specialized in Mathematics & Informatics. 
      </p>
      <p>
        During 4 years I learned and used basic concepts: data structures, algorithms, recursion.
      </p>
      <p>
        Other notable achievement: national olympiad distinction in Chemistry.
      </p>
    </>    
  )
}

export default HighSchoolDetails