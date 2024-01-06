type StepType = 'start' | 'learning' | 'experience'
type StepId = 'about' | 'high-school' | 'masters' | 'mainframe' | 'fcc' | 'dassault' | 'yoti-fe' | 'yoti-fs' | 'kynd' | 'learn-basics' | 'next'
export type Step = {
  id: StepId
  shortTitle: string
  longTitle?: string
  type: StepType
  org?: {
    name?: string
    location?: string
    website?: string
  }
  orgLocation?: string
  featured?: boolean
  tags?: string[]
  date?: string
}

const steps: Step[] = [
  {
    id: 'about',
    shortTitle: 'About me',
    type: 'start',
  },
  {
    id: 'high-school',
    shortTitle: 'CS First contact',
    longTitle: 'CS First contact in High School',
    type: 'learning',
    tags: ['Pascal', 'algorithms', 'data structures'],
    date: '2003 - 2007',
    org: {
      name: 'CN Mesota',
      location: 'Brasov, Romania',
    },
  },
  {
    id: 'masters',
    shortTitle: 'Master\'s Degree',
    longTitle: 'Master\'s Degree and CS attraction',
    type: 'learning',
    tags: ['MATLAB', 'chemistry', 'programming'],
    date: '2007 - 2013',
    org: {
      name: 'CPE Lyon',
      location: 'Lyon, France',
    },
  },
  {
    id: 'mainframe',
    shortTitle: 'Mainframe dev',
    longTitle: 'Mainframe developer',
    type: 'experience',
    tags: ['mainframe', 'Cobol', 'SQL'],
    date: '01/2014 - 06/2016',
    org: {
      name: 'CGI',
      location: 'Paris, France',
    },
  },
  {
    id: 'fcc',
    shortTitle: 'Front-End transition',
    longTitle: 'Front-End developer training',
    type: 'learning',
    tags: ['JavaScript', 'React', 'node', 'CSS', 'HTML'],
    date: '2016',
    org: {
      name: 'freeCodeCamp',
      location: 'online',
      website: 'https://www.freecodecamp.org',
    },
  },
  {
    id: 'dassault',
    shortTitle: 'Front-end',
    longTitle: 'Front-end developer',
    type: 'experience',
    tags: ['JavaScript', 'Jasmine', 'Backbone', 'Docker'], 
    date: '12/2016 - 10/2018',
    org: {
      name: 'Dassault Systèmes',
      location: 'Paris, France',
      website: 'https://www.3ds.com',
    },
  },
  {
    id: 'yoti-fe',
    shortTitle: 'Front-end',
    longTitle: 'Front-end developer',
    type: 'experience',
    date: '11/2018 - 08/2021',
    org: {
      name: 'Yoti',
      location: 'London, UK',
      website: 'https://www.yoti.com',
    },
  },
  {
    id: 'learn-basics',
    shortTitle: 'Self study',
    type: 'learning',
    tags: ['network', 'REST'],
    date: '2019-2022',
    org: {
      location: 'online',
    },
  },
  {
    id: 'yoti-fs',
    shortTitle: 'Full-stack',
    longTitle: 'Full-stack developer',
    type: 'experience',
    tags: ['React', 'node.js', 'express', 'TypeScript'],
    date: '08/2021 - 04/2023',
    org: {
      name: 'Yoti',
      location: 'London, UK',
      website: 'https://www.yoti.com',
    },
  },
  {
    id: 'kynd',
    shortTitle: 'Full-stack',
    longTitle: 'Full-stack developer',
    type: 'experience',
    tags: ['React', 'TypeScript', 'AWS lambda', 'MongoDB'],
    date: '05/2023 - present',
    org: {
      name: 'KYND',
      location: 'London, UK',
      website: 'https://www.kynd.io',
    },
  },
  {
    id: 'next',
    shortTitle: 'What\'s next',
    longTitle: 'Get in touch',
    type: 'start',
  },
]

export default steps
