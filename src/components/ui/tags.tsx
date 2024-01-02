import React, { type ComponentProps, type ReactPropTypes } from 'react'
import { Badge } from '@/components/ui/badge'
import { cn } from "@/components/utils"

type Props = {
  tags: string[]
  variant?: ComponentProps<typeof Badge>['variant']
  className?: string
}
const Tags = (props: Props) => {
  const { tags = [], className, variant } = props

  return (
    <ul className={cn("inline-flex gap-1 flex-wrap", className)}>
    {tags.map((tag, index) => (
      <li key={index}>
        <Badge variant={variant} className='p-1 text-xs font-normal rounded-md'>{tag}</Badge>
      </li>
    ))}
  </ul>
  )
}

export default Tags