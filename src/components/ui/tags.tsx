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

  let variantClass = ''
  if (variant === 'outline') {
    variantClass = 'border-slate-500'
  } else {
    variantClass = 'bg-[#231438ed]'
  }

  return (
    <ul className={cn("inline-flex gap-1 flex-wrap", className)}>
    {tags.map((tag, index) => (
      <li key={index}>
        <Badge variant={variant} className={`${variantClass} p-1 text-xs font-normal rounded-md `}>{tag}</Badge>
      </li>
    ))}
  </ul>
  )
}

export default Tags