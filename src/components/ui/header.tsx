import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import aboutMe from '@/data/aboutMe'
import { Badge } from '@/components/ui/badge'
import Tags from '@/components/ui/tags'
import { cn } from '../utils'
import { GithubIcon, LinkedinIcon, PencilIcon } from 'lucide-react'

const { location, links} = aboutMe

const Link = (props: any) => {
  const { url, icon } = props

  return (
    <div>
      <a className='tracking-tight inline-flex gap-1 text-ellipsis' href={url} target='_blank' rel="noopener noreferrer">
        <span className='flex gap-2 items-center text-nowrap'>
          {url.replace("https://", "").replace('linkedin.com/in/', '')}
          {icon}
        </span>
      </a>
    </div>
  )
}

const Header = () => {
  return (
    <header className='p-6'>
      <div className='flex items-center flex-wrap flex-row gap-2'>
        <div className="w-[calc(50%-2rem)] min-w-[280px]">
          <div className='text-2xl leading-none mb-2'>
            Manuel Micu
          </div>
          <div className='bold text-sm text-slate-900 leading-1'>
            <Badge className='rounded-sm mb-1'>Senior Front-end</Badge> | {' '}
            <Badge className='rounded-sm'>Full-stack</Badge>
          </div>
          <div className='text-sm text-slate-800'>
            Software developer with frontend expertise in: <Tags variant='outline' tags={['React', 'TypeScript', 'node.js']} />
          </div>
        </div>

        <Avatar className={cn('w-[100px] h-[100px] mx-2 border-2 rounded-full border-slate-600 m-auto')}>
          <AvatarImage src="https://github.com/manu-4216.png" />
          <AvatarFallback>MM</AvatarFallback>
        </Avatar>
        <div className='text-left sm:text-right grow text-sm'>
          <div className='font-semibold mb-2'>
            {location}
          </div>
          <div className='text-slate-900 leading-2 text-sm'>
            <Link url={links.github} icon={<GithubIcon size={15} strokeWidth={2} />}></Link>
            <Link url={links.linkedIn} icon={<LinkedinIcon size={15} strokeWidth={2} />}></Link>
            <Link url={links.dev} icon={<PencilIcon size={15} strokeWidth={2} />}></Link>
          </div>
        </div>
      </div>
  </header>
  )
}

export default Header