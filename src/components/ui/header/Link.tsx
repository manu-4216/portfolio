import React from 'react'
import { type LucideIcon, GithubIcon, LinkedinIcon, PencilIcon } from 'lucide-react'

type IconType = 'linkedIn' | 'github' | 'blog'

type Props = {
  url: string
  type: IconType
  text: string
}
const Link = (props: Props) => {
  const { url, type, text } = props

  const iconToType : Record<IconType, LucideIcon>= {
    linkedIn: LinkedinIcon,
    github: GithubIcon,
    blog: PencilIcon,
  }
  const Icon = iconToType[type]

  return (
    <div>
      <a className='tracking-tight inline-flex gap-1 text-ellipsis' href={url} target='_blank' rel="noopener noreferrer">
        <span className='flex gap-2 items-center text-nowrap text-sm'>
          {text || url}
          <Icon size={13} strokeWidth={2} />
        </span>
      </a>
    </div>
  )
}

export default Link