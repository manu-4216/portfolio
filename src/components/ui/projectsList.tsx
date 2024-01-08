import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from '@/components/ui/link'
import { Badge } from '@/components/ui/badge'
import Tags from './tags'
import type { Project } from '@/data/projects'
import { LinkIcon, Bookmark, Code2, Globe, PenSquare } from 'lucide-react'

type Props = {
  projects: Project[]
}

const ProjectLink = (props: any) => {
  const { url, text } = props

  if (!url) {
    return
  }

  let Icon = LinkIcon
  if (text === 'code') {
    Icon = Code2
  } else if (text === 'live') {
    Icon = Globe
  } else if (text === 'blog') {
    Icon = PenSquare
  }

  return (
    <div className='flex flex-row items-center gap-1'>
      <Icon size={14} />
      <Link to={url}>{text}</Link>
    </div>
  )
}

const ProjectsList = (props: Props) => {
  const { projects } = props

  return (
    <ul className='flex flex-wrap gap-2'>
      {projects.map(project => {
        const { id, title, description, links, tags, featured } = project
        const { code: linkToCode, live: linkToLive, blog: blogLink } = links || {}
        const featuredClass = ''
        const nonFeaturedClass = 'border-slate-500'
        const customClass = featured ? featuredClass : nonFeaturedClass

        return (
          <li key={id} className=''>
            <Card className={`w-[320px] h-full flex flex-col relative bg-gradient-to-br from-slate-50 to-transparent border-[#231438c1] ${customClass}`}>
              <CardHeader>
                <CardTitle className='text-base font-normal'>
                  {title}
                  {Boolean(featured) && (
                    <Badge variant='outline' className='p-1 text-xs font-normal rounded-md float-right bg-[#231438ed] text-slate-50'>
                      <Bookmark size={15} className='float-right'/>
                      featured
                    </Badge>
                  )}
                </CardTitle>
               
              </CardHeader>
              <CardContent className='grow'>
                <CardDescription>
                  {description}
                  <div className="flex flex-row gap-4 mt-4">
                    <ProjectLink url={linkToCode} text='code' />
                    <ProjectLink url={linkToLive} text='live' />
                    <ProjectLink url={blogLink} text='blog' />
                  </div>
                </CardDescription>                   
              </CardContent>
              <CardFooter className="flex ">
                <Tags tags={tags} />
              </CardFooter>
            </Card> 
          </li>
        )
      })}
    </ul>
  )
}

export default ProjectsList
