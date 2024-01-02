import React, { type ReactNode } from 'react'
import { cn } from '../utils'

type Props = {
  external?: boolean
  to: string
  children?: ReactNode
  className?: string
}
const Link = (props: Props) => {
  const { to, external = true, children = 'link', className } = props

  const attributes: any = {} 

  if (external) {
    attributes.target = '_blank'
    attributes.rel = 'noopener noreferrer'
  }

  return (
    <a href={to} {...attributes} className={cn('underline text-blue-800', className)}>
      {children}
    </a>
  )
}

export default Link