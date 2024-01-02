import React, { type ReactNode } from 'react'
import Tags from '@/components/ui/tags'

type Props = {
  items: {
    header: ReactNode,
    subHeader: ReactNode,
    body: ReactNode,
  }[]
}
const Steps = (props: Props) => {
  const { items } = props

  return (
    <ol className='relative border-s border-gray-400'>
      {items.map(({ header, subHeader, body }, index) => (
        <li className='mb-6 ms-4' key={index}>
          <div className='absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
          <time className='mb-1 text-sm font-normal leading-none text-gray-500'>
            {header}
          </time>
          <h3 className='text-lg font-semibold text-gray-900'>
            {subHeader}
          </h3>
          <div className='mb-4 mt-2'>
            {body}
          </div>
        </li>
      ))}
    </ol>
  )
}

export default Steps
