import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import { svgPathProperties } from 'svg-path-properties'
import pathwaySteps from '@/data/pathwaySteps'
import Pins from '@/components/ui/pathway/pinsTriggers'
import { Button } from '@/components/ui/button'
import { Building, School } from 'lucide-react'
import { type Step } from '@/data/pathwaySteps'
import { cn } from '@/components/utils'

type Coordinates = {
  x: string
  y: string
}

const getPinCoordinates = (
  numberOfComponents: number = 0,
  svgElem: Element | null,
  filterType: Filter
): Coordinates[] => {
  const svgElement = svgElem as SVGSVGElement
  const path = svgElement?.getElementById('pathway')

  if (!path) {
    return []
  }
  const pathProperties = new svgPathProperties(path.getAttribute('d')!)
  const pathLength = pathProperties.getTotalLength()
  const filterIsActive = filterType !== 'all'
  const FACTOR_OF_USABLE_PATH = !filterIsActive ? 0.98 : 0.9
  const interval =
    (pathLength * FACTOR_OF_USABLE_PATH) / (numberOfComponents - 1)
  const points = []

  const SVG_WIDTH = 500
  const SVG_HEIGHT = 500
  const DELTA_DUE_TO_FILTER = filterIsActive ? 0.2 : 0

  for (let i = 0; i <= numberOfComponents - 1; i++) {
    const distance = interval * (i + DELTA_DUE_TO_FILTER)
    const pointCoordinates = pathProperties.getPointAtLength(distance)
    const Y_HEIGHT_OFFSET = 15

    points.push({
      x: `${String((pointCoordinates.x / SVG_WIDTH) * 100)}%`,
      y: `${String(
        ((pointCoordinates.y - Y_HEIGHT_OFFSET) / SVG_HEIGHT) * 100
      )}%`, // this is actually unchanged after resizing
    })
  }

  return points
}

type Filter = Exclude<Step['type'], 'start'> | 'all'

const getFilteredPathways = (pathwaySteps: Step[], filterType: Filter) => {
  if (filterType === 'all') {
    return pathwaySteps
  }

  const pathwayStepsWithFilter = pathwaySteps.filter((i) => {
    return filterType === i.type
  })

  return pathwayStepsWithFilter
}

const Pathway = () => {
  const svgRef = useRef(null)
  const [pinCoordinates, setPinCoordinates] = useState<Coordinates[]>([])
  const [filterType, setFilterType] = useState<Filter>('all')

  const filteredPathwaySteps = getFilteredPathways(pathwaySteps, filterType)

  const calculatePinCoordinates = () => {
    const coordinates = getPinCoordinates(
      filteredPathwaySteps.length,
      svgRef?.current,
      filterType
    )
    setPinCoordinates(coordinates)
  }

  // The pin coordinates are calculated in %. This way, we can calculate them only once,
  // in the beginning, then they won't change when the width is changed while resizing the screen.
  useEffect(() => {
    if (!svgRef?.current) {
      return
    }
    calculatePinCoordinates()
  }, [svgRef, svgRef?.current, filterType])

  const selectedFilterClass = (type: Filter) => {
    if (filterType !== type) {
      return ''
    }

    if (type === 'learning') {
      return 'border-green-500 text-green-200'
    } else if (type === 'experience') {
      return 'border-blue-500 text-blue-300'
    } else {
      return 'border-slate-200'
    }
  }

  return (
    <section id='journey'>
      <h2 className='text-lg mb-1 mt-4 font-semibold'>My Journey</h2>

      {/* Filters */}
      <div className='inline-flex border rounded-lg'>
        <Button
          size='sm'
          variant={filterType === 'learning' ? 'default' : 'outline'}
          onClick={() => setFilterType('learning')}
          className={cn(
            'border rounded-tr-none rounded-br-none gap-1 text-xs h-fit py-0.5',
            selectedFilterClass('learning')
          )}
        >
          <School size={12} />
          Education
        </Button>
        <Button
          size='sm'
          variant={filterType === 'experience' ? 'default' : 'outline'}
          onClick={() => setFilterType('experience')}
          className={cn(
            'border rounded-none gap-1 text-xs h-fit py-0.5',
            selectedFilterClass('experience')
          )}
        >
          <Building size={12} />
          Work
        </Button>
        <Button
          size='sm'
          variant={filterType === 'all' ? 'default' : 'outline'}
          onClick={() => setFilterType('all')}
          className={cn(
            'border rounded-tl-none rounded-bl-none text-xs h-fit py-0.5',
            selectedFilterClass('all')
          )}
        >
          All
        </Button>
      </div>

      <div className='w-full flex justify-center mt-0.5'>
        <div className='relative mt-14 max-w-[35rem] w-[calc(100vw-7rem)] translate-z-0'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            ref={svgRef}
            viewBox='0 0 500 500'
            width='500'
            height='500'
            preserveAspectRatio='none'
            className='w-full'
          >
            <path
              id='pathway'
              style={{
                stroke: 'url(#gradient)',
                fill: 'none',
                strokeLinecap: 'round',
                strokeWidth: '6px',
                strokeDasharray: '27',
              }}
              d='M 106.946 6.247 C 106.946 6.247 120.748 15.264 168.013 26.997 C 257.086 49.107 293.909 49.537 292.788 84.616 C 290.6 153.04 -58.662 131.541 22.216 231.72 C 93.791 320.376 522.336 229.389 481.472 367.175 C 467.849 413.112 307.941 436.181 253.672 467.122 C 230.177 480.52 222.645 491.679 222.645 491.679'
            />

            <defs>
              <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
                <stop offset='0%' stopColor='#f87171' />
                <stop offset='60%' stopColor='#16a34a' />
                <stop offset='100%' stopColor='#3b82f6' />
              </linearGradient>
            </defs>
          </svg>

          {Boolean(pinCoordinates.length) && (
            <Pins coordinates={pinCoordinates} steps={filteredPathwaySteps} />
          )}
        </div>
      </div>
    </section>
  )
}

export default Pathway
