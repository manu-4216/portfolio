import React, { Fragment } from 'react'
import { type Step } from '@/data/pathwaySteps'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow,
} from '@/components/ui/tooltip'
import PinAlertContent from '@/components/ui/pathway/pinAlert'

type Coordinates = { 
  x: number
  y: number
}
type Props = {
  coordinates: Coordinates[]
  steps: Step[]
}
const Pins = (props: Props) => {
  const { coordinates, steps } = props

  return (
    <>
      {steps.map((step, index) => {
        const { x = 0, y = 0 } = coordinates[index] || {}
        const { type } = step
        let bgClass
        if (type === 'start') {
          bgClass = 'bg-red-200'
        }
        if (type === 'learning') {
          bgClass = 'bg-yellow-100'
        }
        if (type === 'experience') {
          bgClass = 'bg-orange-100'
        }
        
        return (
          <Fragment key={index}>
            <div key={index} className='absolute' style={{ left: x, top: y - 15 }}>
              <TooltipProvider>
                <Tooltip open>
                  <TooltipTrigger className='h-0 w-0'></TooltipTrigger>
                  <TooltipContent 
                    avoidCollisions={false}
                    className={`${bgClass} cursor-pointer transition-all max-w-28 px-2 py-1 rounded-sm`}
                  >
                    <PinAlertContent step={step} />
                    <TooltipArrow className='' width={13} height={8} />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </Fragment>
        )
      })}
    </>
  )
}

export default Pins