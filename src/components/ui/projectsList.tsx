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
import Tags from './tags'
import type { Project } from '@/data/projects'

type Props = {
  projects: Project[]
}

const ProjectsList = (props: Props) => {
  const { projects } = props

  return (
    <ul className='flex flex-wrap gap-2'>
      {projects.map(project => {
        const { id, title, description, links, tags } = project
        const { code: linkToCode, live: linkToLive } = links || {}
        
        return (
          <li key={id} className=''>
            <Card className='w-[320px] h-full flex flex-col'>
              <CardHeader>
                <CardTitle className='text-base font-normal'>
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className='grow'>
                <CardDescription>
                  {description}
                  <div className="flex flex-row gap-4 mt-4">
                    {linkToCode ? (<Link to={linkToCode}>code</Link>) : null}
                    {linkToLive ? (<Link to={linkToLive}>live</Link>) : null}
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
