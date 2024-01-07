import React from 'react'
import type { Step } from '@/data/pathwaySteps'
import { Building } from 'lucide-react'
import { cn } from '@/components/utils'

type Props = {
  org?: Step['org']
  type: Step['type']
  className?: string
}

const Entity = (props: Props) => {
  const { org, type, className } = props

  let iconClass = ''
  if (type === 'learning') {
    iconClass = 'text-green-200'
  }
  if (type === 'experience') {
    iconClass = 'text-blue-300'
  }

  return (
    <>
      <div className={cn(`text-xs text-slate-200 flex items-start gap-1`, className)}>
        {org?.name && <Building size={11} className={`mt-[3px] ${iconClass}`} />}
        <span>{org?.name}</span>
      </div>
    </>
  )
}

export default Entity