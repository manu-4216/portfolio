import React, { useEffect, useState, type RefCallback } from 'react'
import { svgPathProperties } from 'svg-path-properties'
import pathwaySteps from '@/data/pathwaySteps'
import Pins from '@/components/ui/pathway/pinsTriggers'
import useResizeObserver from 'use-resize-observer'

type Coordinates = { 
  x: number
  y: number
}

const getPinCoordinates = (numberOfComponents: number = 0, pathWidth: number): Coordinates[] => {
  const path = document.getElementById('pathway')
  if (!path) {
    return []
  }
  const pathProperties = new svgPathProperties(path.getAttribute('d')!)
  const pathLength = pathProperties.getTotalLength()
  const interval = pathLength * 0.95 / (numberOfComponents - 1)
  const points = []

  for (let i = 0; i <= numberOfComponents - 1; i++) {
    const distance = interval * i

    const pointCoordinates = pathProperties.getPointAtLength(distance)
    let x = pointCoordinates.x
    if (pathWidth < 500) {
      x = x * pathWidth/500
    }

    points.push({
      x,
      y: pointCoordinates.y
    })
  }

  return points
}

const Pathway = () => {
  const [pinCoordinates, setPinCoordinates] = useState<Coordinates[]>([])
  const { ref, width: pathWidth = 0 } = useResizeObserver<SVGSVGElement>()
  
  const calculatePinCoordinates = (pathWidth: number) => {
    const coordinates = getPinCoordinates(pathwaySteps.length, pathWidth)
    setPinCoordinates(coordinates)
  }
  useEffect(() => {
    calculatePinCoordinates(pathWidth)
  }, [pathWidth])

  return (
    <div className='relative mt-12 m-auto max-w-[30rem] w-full'>
      <svg xmlns="http://www.w3.org/2000/svg"
        ref={ref}
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
            <stop offset="0%"   stopColor="#23b2a2"/>
            <stop offset="100%" stopColor="#785fc8"/>
          </linearGradient>
        </defs>
      </svg>
      
      <Pins coordinates={pinCoordinates} steps={pathwaySteps} />
    </div>
  )
}

export default Pathway