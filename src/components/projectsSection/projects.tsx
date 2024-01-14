import React, { useState } from 'react'
import projects from '@/data/projects'
import MainProjectsList from './mainProjectsList'
import SecondaryProjectsList from './secondaryProjectsList'
import { Button } from '@/components/ui/button'

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

      <MainProjectsList projects={featuredProjects} />
      
      <Button onClick={toggleExtra} className='my-4 bg-[#231438ed]'>
        {showExtra ?  'Hide extra projects' : 'Show more projects'}
      </Button>
      
      {showExtra && (
        <div className='mx-12 max-w-full mb-12'>
          <SecondaryProjectsList projects={extraProjects} />
        </div>
        )
      }
    </section>
  )
}

export default Projects
