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
        Developed mainframe code (Cobol, CICS, JCL, DB2 SQL) for the banking sector.
      </p>
      <p>
        Example of tasks: batch processing of files, DB2 SQL queries, integration tests`
      </p>
    </>    
  )
}

export default MainframeDetails