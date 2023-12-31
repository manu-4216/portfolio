import React from 'react'
import { Badge } from '@/components/ui/badge'
import { cn } from "@/components/utils"

type Props = {
  tags: string[]
  className?: string
}
const Tags = (props: Props) => {
  const { tags = [], className } = props

  return (
    <ul className={cn("flex gap-1 flex-wrap mt-4", className)}>
    {tags.map((tag, index) => (
      <li key={index}>
        <Badge variant="default" className='p-1 text-xs font-normal rounded-md'>{tag}</Badge>
      </li>
    ))}
  </ul>
  )
}

export default Tags