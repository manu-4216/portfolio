import React from 'react'
import { type Step } from '@/data/pathwaySteps'
import Link from '@/components/ui/link'

type Props = {
  step: Step
}
const BasicsDetails = (props: Props) => {
  return (
    <>  
      <div>
        During my time off, I studied a few additional concepts to fill some gaps, and expand my skills as a more rounded (aka T-shaped) developer:
        <ul className='list-disc [&>li]:ml-4'>
          <li>CS fundamentals: networking fundamentals (eg OSI model), RFCs for HTTP, REST dissertation</li>
          <li>Classic books: <strong className='font-semibold'>Clean Code, The Pragmatic Programmer, Refactoring</strong></li>
          <li>Online courses:
            <ul className='list-decimal [&>li]:ml-4'>
              <li>CS50 (<Link to='https://certificates.cs50.io/29c80bf2-2866-4774-9877-982cc7b372d4.pdf?size=letter' external>
                certification link
                </Link>)
              </li>
              <li>The Missing Semester (<Link to='https://missing.csail.mit.edu/' external>course</Link>)</li>
              <li>Golang web development (<Link to='https://missing.csail.mit.edu/' external>course</Link>, <Link to='https://www.dropbox.com/scl/fi/phcs7vnwl49lze46n3v3s/UC-a88a0bc9-659d-41e3-aba2-a46c637103c6.jpg?rlkey=kg4h0a0bzyyz9tscj7uhfey9q&dl=0'>certification</Link>)</li>
              <li>Microservices in node.js (<Link to='https://github.com/manu-4216' external>my notes</Link>)</li>
              <li>Typescript on ui.dev(<Link to='https://ui.dev/typescript' external>course</Link>, <Link to='https://www.dropbox.com/scl/fi/2vvyp0fjo6sr4rnoxt4h4/Typescript-uidev-certificate.pdf?rlkey=x6es5xzegdvaeciccq7sk5sty&dl=0'>certification</Link>)</li>
            </ul>
          </li>
        </ul>
      </div>
    </>    
  )
}

export default BasicsDetails