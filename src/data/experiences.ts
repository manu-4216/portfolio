const experiences = [
  {
    id: 'kynd',
    company: "Kynd",
    website: "https://www.kynd.io/",
    location: "London, UK",
    roles: [
      {
        date: "05/2023 - present",
        title: "Fullstack developer",
        description: `etc fullstack role`,
      }
    ],
    tech: "React, TypeScript, Jest, REST API, Postgres, AWS lambda, MongoDB, Styled components, Postman, Cypress",
  },
  {
    id: 'yoti',
    company: "Yoti",
    website: "https://www.yoti.com/",
    location: "London, UK",
    roles: [
      {
        date: "11/2018 - 04/2021",
        title: "Frontend Developer",
        description:
          `Main contributor to all stages of a React web app: initial setup, scale-up, addressing tech debt, supporting new joiners, and finally handover.

          Worked within a dynamic Agile team to build hight quality React app
          - high quality React app
          - high confidence unit tests (Jest, Testing Library)
          - other details: dynamic Agile team, Express.js, Storybook, CSS modules`,
      },
      {
        date: "04/2021 - 08/2021",
        title: "Senior Frontend Developer",
        description:
        `- Excellent communication, to ensure best and pragmatic solution is chosen, and refined.
         - Major contributor to front-end architecture reviews, proposing ways for improving the codebase.
         - Implemented a developer-driven process for addressing tech debt continuously, which boosted developer productivity.`,
      },
      {
        date: "08/2021 - 04/2023",
        title: "Fullstack Developer",
        description: `etc fullstack role`,
      },
    ],
    tech: "React, TypeScript, Storybook, Jest, eslint, vite, i18n, a11y, monorepo, design system, Node.js, Express, Postgres, knex, OpenAPI, Docker, k8s, testing",
  },
  {
    id: 'dassault',
    company: "Dassault Systèmes",
    website: "https://www.3ds.com/",
    location: "Paris, France",
    roles: [
      {
        date: "12/2016 - 10/2018",
        title: "Frontend developer",
        description:
          `In this first role as Front-End Developer, I practiced the fundamentals: Vanilla JavaScript, DOM API, cross-browser CSS, HTML events (delegation, capturing)`,
      }
    ],
    tech: "JavaScript, Jasmine, Jenkins, Docker, Backbone, Polymer",
  },
  {
    id: 'cgi',
    company: "CGI",
    website: "https://www.kynd.io/",
    location: "Orleans, France",
    roles: [
      {
        date: "01/2014 - 06/2016",
        title: "Mainframe Software Developer",
        description: 
          `Developed mainframe code (Cobol, CICS, JCL, DB2 SQL) for the banking sector.\n
Example of tasks: batch processing of files, DB2 SQL queries, integration tests`,
      }
    ],
    tech: "Cobol, CICS, JCL, DB2 SQL",
  },
]

export default experiences

export type Experience = typeof experiences[0]

export const getById = (id: Experience['id']): Experience => experiences.find(i => i.id === id)!