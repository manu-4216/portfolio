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
  x: string
  y: string
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
          bgClass = 'border-red-400 text-red-300 border-2'
        }
        if (type === 'learning') {
          bgClass = 'border-green-600 text-green-100 border'
        }
        if (type === 'experience') {
          bgClass = 'border-blue-500 text-blue-100 border'
        }
        
        return (
          <Fragment key={index}>
            <div key={index} className='absolute' style={{ left: x, top: y }}>
              <TooltipProvider>
                <Tooltip open>
                  <TooltipTrigger className='h-0 w-0'></TooltipTrigger>
                  <TooltipContent 
                    avoidCollisions={false}
                    className={`${bgClass} bg-[#231438ed] cursor-pointer transition-all max-w-32 px-2 py-1 rounded-sm`}
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
