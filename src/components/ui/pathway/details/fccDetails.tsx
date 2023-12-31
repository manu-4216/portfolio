import React from 'react'
import { type Step } from '@/data/pathwaySteps'

type Props = {
  step: Step
}
const FccDetails = (props: Props) => {
  return (
    <>  
      <p>FreeCodeCamp is the biggest online community for learning web development in a structured manner.
      <p>
        It uses a project-based learning. During this time, I did multiple projects. Available on CodePen, and GitHub.
      </p>
      <p>
        I obtained a Front-End certification (link). I also did the fullstack projects</p>
      </p>
    </>    
  )
}

export default FccDetails