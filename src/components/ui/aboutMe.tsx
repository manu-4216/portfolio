import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import aboutMe from '@/data/aboutMe'
import { GithubIcon, LinkedinIcon, PencilIcon } from 'lucide-react'

const { location, shortDescription, links} = aboutMe

const Link = (props: any) => {
  const { url, icon } = props

  return (
    <div>
      <a className='tracking-tight inline-flex gap-1 text-ellipsis' href={url} target='_blank' rel="noopener noreferrer">
        <span className='flex gap-2 items-center'>
          {url.replace("https://", "").replace('linkedin.com/in/', '')}
          {icon}
        </span>
      </a>
    </div>
  )
}

const AboutMe = () => {
  return (
    <header className='mb-4'>
      <h1 className='flex items-center wrap my-4 flex-row'>
        <div className="w-[calc(50%-2rem)] min-w-[200px]">
          <div className='text-2xl leading-none mb-2'>
            Manuel Micu
          </div>
          <div className='bold text-sm text-red-400 leading-1'>
            {shortDescription}
          </div>
        </div>

        <Avatar className='w-[100px] h-[100px] mx-2 border-2 rounded-full border-red-400'>
          <AvatarImage src="https://github.com/manu-4216.png" />
          <AvatarFallback>MM</AvatarFallback>
        </Avatar>
        <div className="text-right grow text-sm">
          <div className='font-semibold mb-2'>
            {location}
          </div>
          <div className='text-slate-900 leading-2 text-sm'>
            <Link url={links.github} icon={<GithubIcon size={16} />}></Link>
            <Link url={links.linkedIn} icon={<LinkedinIcon size={16} />}></Link>
            <Link url={links.dev} icon={<PencilIcon size={16} />}></Link>
          </div>
        </div>
      </h1>
  </header>
  )
}

export default AboutMe