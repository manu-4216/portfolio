import React from 'react'
import { type Step } from '@/data/pathwaySteps'

type Props = {
  step: Step
}
const KyndDetails = (props: Props) => {
  return (
    <>  
      <ul className='list-disc [&>li]:ml-4'>
        <li>Coordinated the development of a front-end project. Tech used: React, Redux, TypeScript, Styled Components, Cypress, Jest</li>
        <li>Migrated a large portion of the app logic to new AWS TypeScript lambdas, which interacts with the REST API, and a Document-based database</li>
        <li>Wrote code, tests, documentation for the main REST API product (OpenAPI, Express.js, OpenAPI, PostgreSQL, Postman)</li>
      </ul>
    </>    
  )
}

export default KyndDetails

