import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import type { Project } from '@/data/projects'
import ProjectCard from './project'
import Autoplay from 'embla-carousel-autoplay'

type Props = {
  projects: Project[]
}
const SecondaryProjectsList = (props: Props) => {
  const { projects } = props

  return (
    <Carousel 
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      >
      <CarouselContent>
        {projects.map((project, index) => (
           <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
             <ProjectCard project={project}/>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default SecondaryProjectsList