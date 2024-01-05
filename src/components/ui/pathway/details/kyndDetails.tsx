import React from 'react'
import { type Step } from '@/data/pathwaySteps'

type Props = {
  step: Step
}
const KyndDetails = (props: Props) => {
  return (
    <>  
      <ul className='list-disc [&>li]:ml-4'>
        <li>Development of front-end features, using React, Redux, Typescript, Styled Components</li>
        <li>Written serverless AWS lambda functions</li>
        <li>Contributed to features around a REST API</li>
        <li>Wrote tests using Cypress, Postman, Jest, Testing Library</li>
      </ul>
    </>    
  )
}

export default KyndDetails