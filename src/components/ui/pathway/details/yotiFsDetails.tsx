import React from 'react'
import { type Step } from '@/data/pathwaySteps'

type Props = {
  step: Step
}
const MainframeDetails = (props: Props) => {
  return (
    <>  
      <p>
        Tech stack: React, node.js, Express.js, REST API, PostgreSQL, Knex
      </p>
    </>    
  )
}

export default MainframeDetails