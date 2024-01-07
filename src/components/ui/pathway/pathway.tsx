import React, { useEffect, useState, type RefCallback, type RefObject, useRef } from 'react'
import { svgPathProperties } from 'svg-path-properties'
import pathwaySteps from '@/data/pathwaySteps'
import Pins from '@/components/ui/pathway/pinsTriggers'

type Coordinates = { 
  x: string
  y: string
}

const getPinCoordinates = (numberOfComponents: number = 0): Coordinates[] => {
  const path = document.getElementById('pathway')
  
  if (!path) {
    return []
  }
  const pathProperties = new svgPathProperties(path.getAttribute('d')!)
  const pathLength = pathProperties.getTotalLength()
  const FACTOR_OF_USABLE_PATH = 0.99
  const interval = pathLength * FACTOR_OF_USABLE_PATH / (numberOfComponents - 1)
  const points = []

  for (let i = 0; i <= numberOfComponents - 1; i++) {
    const distance = interval * i
    const SVG_WIDTH = 500
    const SVG_HEIGHT = 500

    const pointCoordinates = pathProperties.getPointAtLength(distance)
    const Y_HEIGHT_OFFSET = 15

    points.push({
      x: `${String(pointCoordinates.x / SVG_WIDTH * 100)}%`,
      y: `${String((pointCoordinates.y - Y_HEIGHT_OFFSET) / SVG_HEIGHT * 100)}%` // this is actually unchanged after resizing
    })
  }

  return points
}

const Pathway = () => {
  const svgRef = useRef(null)
  const [pinCoordinates, setPinCoordinates] = useState<Coordinates[]>([])

  const calculatePinCoordinates = () => {
    const coordinates = getPinCoordinates(pathwaySteps.length)
    setPinCoordinates(coordinates)
  }

  // The pin coordinates are calculated in %. This way, we can calculate them only once, 
  // in the beginning, then they won't change when the width is changed while resizing the screen.
  useEffect(() => {
    if (!svgRef?.current) {
      return
    }
    calculatePinCoordinates()
  }, [svgRef, svgRef.current])

  return (
    <section id='journey'>
      <h2 className='text-lg mb-2 mt-4 font-semibold'>My Journey</h2>
      <div className='w-full flex justify-center'>
        <div className='relative mt-14 max-w-[35rem] w-[calc(100vw-7rem)] translate-z-0'>
          <svg xmlns="http://www.w3.org/2000/svg"
            ref={svgRef}
            viewBox="0 0 500 500"
            width="500"
            height="500"
            preserveAspectRatio="none"
            className='w-full'
          >
            <path
              id="pathway"
              style={{ stroke: 'url(#gradient)', fill: 'none', strokeLinecap: 'round', strokeWidth: '6px', strokeDasharray: '27' }}
              d="M 106.946 6.247 C 106.946 6.247 120.748 15.264 168.013 26.997 C 257.086 49.107 293.909 49.537 292.788 84.616 C 290.6 153.04 -58.662 131.541 22.216 231.72 C 93.791 320.376 522.336 229.389 481.472 367.175 C 467.849 413.112 307.941 436.181 253.672 467.122 C 230.177 480.52 222.645 491.679 222.645 491.679"
            />

            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#f87171" />
                <stop offset="60%"  stopColor="#16a34a" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
          
          {Boolean(pinCoordinates.length) && (
            <Pins coordinates={pinCoordinates} steps={pathwaySteps} />
          )}
          
        </div>
      </div>
    </section>
  )
}

export default Pathway
