import React, { type ComponentProps, type ReactPropTypes } from 'react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/components/utils'
import { ComponentIcon } from 'lucide-react'

type Props = {
  tags: string[]
  variant?: ComponentProps<typeof Badge>['variant']
  className?: string
  icon?: typeof ComponentIcon
}
const Tags = (props: Props) => {
  const { tags = [], className, variant, icon: Icon } = props

  let variantClass = ''
  if (variant === 'outline') {
    variantClass = 'border-slate-500'
  } else {
    variantClass = 'bg-[#231438ed]'
  }

  return (
    <ul className={cn('inline-flex gap-1 flex-wrap', className)}>
      {tags.map((tag, index) => (
        <li key={index}>
          <Badge
            variant={variant}
            className={`${variantClass} p-1 text-xs font-normal rounded-md gap-1`}
          >
            {Icon && <Icon size={15} />}
            {tag}
          </Badge>
        </li>
      ))}
    </ul>
  )
}

export default Tags
