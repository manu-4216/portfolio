import React from 'react'
import type { Project } from '@/data/projects'
import ProjectCard from './project'

type Props = {
  projects: Project[]
}
const ProjectsList = (props: Props) => {
  const { projects } = props

  return (
    <ul className='flex flex-wrap gap-2'>
      {projects.map(project => {
        return (
          <li key={project.id} className=''>
            <ProjectCard project={project} />
          </li>
        )
      })}
    </ul>
  )
}

export default ProjectsList
