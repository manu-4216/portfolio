import React, { useState } from 'react'
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
import ProjectsList from './projectsList'
import { Button } from './button'

const projectsInReverseOrder = [...projects].reverse()
const featuredProjects = projectsInReverseOrder.filter(i => Boolean(i.featured))
const extraProjects = projectsInReverseOrder.filter(i => !Boolean(i.featured))

const Projects = (props: any) => {
  const [showExtra, setShowExtra] = useState(false)

  const toggleExtra = () => {
    setShowExtra(!showExtra)
  }

  return (
    <section id='projects'>
      <h2 className='text-lg my-4 font-semibold'>My Projects</h2>

      <ProjectsList projects={featuredProjects} />
      
      <Button onClick={toggleExtra} className='my-4 bg-[#231438ed]'>
        {showExtra ?  'Hide extra projects' : 'Show more projects'}
      </Button>
      
      {showExtra && <ProjectsList projects={extraProjects} />}
    </section>
  )
}

export default Projects
