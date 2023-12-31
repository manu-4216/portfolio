type StepType = 'start' | 'learning' | 'experience'
type StepId = 'about' | 'high-school' | 'masters' | 'mainframe' | 'fcc' | 'dassault' | 'yoti-fe' | 'yoti-fs' | 'kynd' | 'learn-basics'
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
  content?: string
}

const steps: Step[] = [
  {
    id: 'about',
    shortTitle: 'About me',
    type: 'start',
  },
  {
    id: 'high-school',
    shortTitle: 'Basics',
    longTitle: 'High School',
    type: 'learning',
    tags: ['Pascal', 'algorithms', 'data structures'],
    date: '2003 - 2007',
  },
  {
    id: 'masters',
    shortTitle: 'Master\'s Degree',
    longTitle: 'Master\'s Degree in Chemical Engineering',
    type: 'learning',
    tags: ['MATLAB', 'chemistry'],
    date: '2007 - 2013',
    org: {
      name: 'CPE Lyon',
      location: 'Lyon, France',
    },
  },
  {
    id: 'mainframe',
    shortTitle: 'Mainframe developer',
    longTitle: 'Mainframe Software developer',
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
    shortTitle: 'Front-End transition with FreeCodeCamp',
    longTitle: 'Front-End developer Certification',
    type: 'learning',
    tags: ['JavaScript', 'React'],
    date: '2016',
    org: {
      name: 'freeCodeCamp',
      location: 'online',
      website: 'https://www.freecodecamp.org',
    },
  },
  {
    id: 'dassault',
    shortTitle: 'Front-end developer',
    longTitle: 'Front-end developer',
    type: 'experience',
    content: '',
    tags: ['JavaScript', 'Backbone'],
    date: '12/2016 - 10/2018',
    org: {
      name: 'Dassault Systèmes',
      location: 'Paris, France',
      website: 'https://www.3ds.com',
    },
  },
  {
    id: 'yoti-fe',
    shortTitle: 'Front-end developer',
    longTitle: 'Front-end developer',
    type: 'experience',
    content: '2018, etc',
    tags: ['React', 'senior'],
    date: '11/2018 - 04/2021, 04/2021 - 08/2021',
    org: {
      name: 'Yoti',
      location: 'London, UK',
      website: 'https://www.yoti.com',
    },
  },
  {
    id: 'learn-basics',
    shortTitle: 'Learn fundamentals',
    type: 'learning',
    content: 'What I learned: REST, HTTP, network, missing semester, CS50, Books (clean code, etc)',
    tags: ['bash', 'C', 'algorithms'],
    date: '2019-2022',
    org: {
      location: 'online',
    },
  },
  {
    id: 'yoti-fs',
    shortTitle: 'Full-stack developer',
    type: 'experience',
    content: 'I moved to a different team, got into full stack',
    tags: ['node.js', 'express', 'TypeScript'],
    date: '08/2021 - 04/2023',
    org: {
      name: 'Yoti',
      location: 'London, UK',
      website: 'https://www.yoti.com',
    },
  },
  {
    id: 'kynd',
    shortTitle: 'Full-stack developer',
    type: 'experience',
    tags: ['AWS lambda', 'Cypress', 'Postman'],
    date: '05/2023 - present',
    org: {
      name: 'KYND',
      location: 'London, UK',
      website: 'https://www.kynd.io',
    },
  },
]

export default steps