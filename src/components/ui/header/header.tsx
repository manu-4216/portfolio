import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import aboutMe from '@/data/aboutMe'
import Tags from '@/components/ui/tags'
import { cn } from '../../utils'
import HeaderLink from './Link'

const { location, links} = aboutMe

const Header = () => {
  return (
    <header className='p-6 pb-2'>
      <div className='flex flex-row gap-4 items-center justify-between'>
        <div className="flex flex-col gap-1">
          <span className='text-xl sm:text-2xl leading-none mb-1'>
            Manuel Micu
          </span>
          <div className='flex flex-wrap gap-1 bold text-sm text-slate-900 leading-1'>
            <Tags tags={['Senior Front-end']} /> 
            {' | '}
            <Tags tags={['Full-stack']} />
          </div>
          <div className='text-sm text-slate-800 mb-2 hidden sm:block'>
            <Tags
              variant='outline'
              tags={['React', 'TypeScript', 'node.js']}
            />
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <Avatar className={cn('w-[50px] h-auto sm:w-[80px] mx-2 border-2 rounded-full border-slate-600')}>
            <AvatarImage src="https://github.com/manu-4216.png" />
            <AvatarFallback>MM</AvatarFallback>
          </Avatar>
          <div className='text-xs text-slate-900 text-nowrap'>
            {location}
          </div>
        </div>

        <div className='text-slate-900 leading-2 flex flex-col'>
          <HeaderLink url={links.linkedIn} type='linkedIn' text='manuel-micu' />
          <HeaderLink url={links.github} type='github' text='manu-4216' />
          <HeaderLink url={links.dev} type='blog' text='manu4216' />
        </div>
      </div>
  </header>
  )
}

export default Header