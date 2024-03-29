import React from 'react'
import { type Step } from '@/data/pathwaySteps'

type Props = {
  step: Step
}
const MainframeDetails = (props: Props) => {
  return (
    <>  
      <p>
        Within Yoti, I switched to a full-stack team, since I wanted to grow and explore more this direction, beyond the previous self study.
        <div className='italic mt-2'>
          <span className='font-semibold'>Side note:</span> Staying in the same company for such a horizontal switch is often underrated. In this case, it was definitely the right move.
        </div>
      </p>
      <p>
        I successfully used a broad array of tech tools, some which I hadn't used professionally before, and delivered features end to end, using tools such as: React, node.js, express, monorepo, Typescript, APIs, PostgreSQL, knex.
      </p>

      <details className='mb-2'>
        <summary className='font-semibold text-sm text-blue-700 cursor-pointer'>
          Examples of frontend work
        </summary>
        <div className='ml-1 border-l border-blue-600 ps-2'>
          <ul className='list-disc [&>li]:ml-4'>
            <li>Contributed to building a web SDK, in a Typescript monorepo</li>
            <li>Supported new team members with constructive feedback during PR reviews</li>
          </ul>
        </div>
      </details>

      <details className='mb-2'>
        <summary className='font-semibold text-sm text-blue-700 cursor-pointer'>
          Examples of backend work
        </summary>
        <div className='ml-1 border-l border-blue-600 ps-2'>
          <ul className='list-disc [&>li]:ml-4'>
            <li>RESTful API: added new endpoints, tested using unit or contract-based tests (<em>Jest, Sinon, Mocha</em>), wrote OpenAPI schemas.</li>
            <li>Auth: contributed to updating the auth method, to a JWT-based one</li>
            <li>DBs: write+test migration files, write DB queries (using raw SQL, knex query builder, and Sequelize).</li>
            <li>Other tools used: docker, kubernetes, monorepo, Remix.</li>
            <li>Tech & organisational discussions: library choices, conventions (naming, patterns), process improvements (moving from Scrum to Kanban, PR review processes).</li>
          </ul>
        </div>
      </details>
    </>
  )
}

export default MainframeDetails
