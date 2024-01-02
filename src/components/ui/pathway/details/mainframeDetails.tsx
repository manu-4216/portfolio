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
        After graduating in Chemical Engineering, I chose not to pursue this field. Instead I got an opportunity to transition into pragramming.
      </p>

      <p>
        This first job confirmed to me that I did enjoy writing softwar professionally. I used Cobol, CICS, JCL, DB2 SQL, for the banking sector. 
        Example of tasks: batch processing of files, DB2 SQL queries, integration tests.
      </p>
      <p>
        I also realised that I needed to upskill myself on my own, so I can be part of the tech world I dreamed about by following the tech startup news.
      </p>
      <p>
      </p>
    </>    
  )
}

export default MainframeDetails