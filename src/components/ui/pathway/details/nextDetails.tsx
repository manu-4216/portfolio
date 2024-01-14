import React from 'react'
import { type Step } from '@/data/pathwaySteps'
import Link from '@/components/ui/link'
import { Button } from '@/components/ui/button'

type Props = {
  step: Step
}
const myEmail = `manu4216${'@'}gmail.com`

const NextDetails = (props: Props) => {
  return (
    <>  
      <p>
        Feel free to get in touch about new opportunities.
      </p>

      <p>
        <div>
          <span className='font-sm text-slate-600'>Location preference: </span>
          <span className='font-medium'>Remote</span>
        </div>
        <div>
          <span className='font-sm text-slate-600'>Time Zone: </span>
          <span className='font-medium text-slate-900'>GMT+0 - GMT+6</span>
        </div>
      </p>

      <p>
        <Button variant='outline' className='border-slate-800'>
          <Link to={`mailto:${myEmail}`} className='no-underline'>Email me</Link>
        </Button>
      </p>
    </>    
  )
}

export default NextDetails