import React from 'react'
import { type Step } from '@/data/pathwaySteps'
import Link from '@/components/ui/link'

type Props = {
  step: Step
}
const FccDetails = (props: Props) => {
  return (
    <>  
      <p>I chose to use freeCodeCamp (FCC), an online community for learning web development in a structured manner.</p>
      <p>
        I really enjoyed building up my web development skills by doing projects, both front-end and fullstack, using HTML, CSS, Javascript, node.js.
      </p>
      
      You can find details on the following links:
      <ul className='list-disc [&>li]:ml-4'>
        <li><Link to='https://www.freecodecamp.org/manu-4216' external>freeCodeCamp.org</Link> - my FCC profile (certifications, projects)</li>
        <li><Link to='https://codepen.io/manu4216' external>CodePen</Link> - platform used for my initial projects</li>
        <li><Link to='https://github.com/manu-4216' external>GitHub</Link> - used for fullstack projects</li>
      </ul>

      <div className='mt-4'>
        Direct links to certifications earned:
      </div>
      <ul className='list-disc [&>li]:ml-4'>
        <li><Link to='https://www.freecodecamp.org/certification/manu-4216/legacy-front-end'>Front-End</Link></li>
        <li><Link to='https://www.freecodecamp.org/certification/manu-4216/javascript-algorithms-and-data-structures'>JavaScript algorithms and data structures</Link></li>
      </ul>
    </>    
  )
}

export default FccDetails