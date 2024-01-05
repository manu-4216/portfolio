import React from 'react'
import { type Step } from '@/data/pathwaySteps'
import Tags from '@/components/ui/tags'

type Props = {
  step: Step
}
const MainframeDetails = (props: Props) => {
  return (
    <>
      <p>
        After graduating in Chemical Engineering, I chose not to pursue this field. Instead I got an opportunity to transition into programming, by first doing a training.
      </p>

      <p>
        This first job confirmed to me that I did enjoy writing software professionally. I used Cobol, CICS, JCL, DB2 SQL, for the banking sector. 
        Example of tasks: batch processing of files, DB2 SQL queries, integration tests.
      </p>
      <p>
        I also realized that I needed to upskill myself on my own, to be part of the exciting tech world I dreamed about.
      </p>
    </>    
  )
}

export default MainframeDetails