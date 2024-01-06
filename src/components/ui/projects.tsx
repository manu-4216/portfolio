import React from 'react'
import projects from '@/data/projects'
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

const Projects = (props: any) => {
  return (
    <section id='projects'>
      <h2 className='text-xl my-4'>My Projects</h2>

      <ul className='flex flex-wrap gap-2'>
        {projects.reverse().map(project => {
          const { id, title, description, links, tags } = project
          const { code: linkToCode, live: linkToLive } = links || {}
          
          return (
            <li key={id} className=''>
              <Card className='w-[320px]'>
                <CardHeader>
                  <CardTitle className='text-base font-normal'>
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {description}
                    <div className="flex flex-row gap-4">
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
    </section>
  )
}

export default Projects
