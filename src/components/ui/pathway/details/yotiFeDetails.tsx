import React from 'react'
import { type Step } from '@/data/pathwaySteps'
import Steps from '@/components/ui/steps'
import Link from '@/components/ui/link'
import Tags from '@/components/ui/tags'

type Props = {
  step: Step
}
const YotiDetails = (props: Props) => {
  return (
    <div className='pl-2'>
      <Steps items={[
        { 
          header: '11/2018 - 04/2021',
          subHeader: 'Front-end developer',
          body: (
            <div>
              <p>
                Main contributor to all stages of a React web app: initial setup, scale-up, addressing tech debt, supporting new joiners, and handover. 
                Link to the web app <Link to='https://yoti.world/yoti-idv/idv' external>here</Link>.
              </p>

              <p className='mb-2'>
                <ul className='list-disc [&>li]:ml-4'>
                  <li>Part of a multidisciplinary agile team.</li> 
                  <li>High confidence unit tests (Jest, Testing Library)</li>
                  <li>Built other auxiliary tools (mock server, session viewer, automation scripts)</li>
                </ul>
              </p>

              <details className='mb-2'>
                <summary className='font-semibold text-sm text-blue-700 cursor-pointer'>
                  More details
                </summary>
                <div className='ml-1 border-l border-blue-600 ps-2'>
                  I worked with a wide variety of tools and did many tasks:
                  <ul className='list-decimal [&>li]:ml-4'>
                    <li><strong>main project</strong>: React SPA using mobile first, responsive web design, CSS modules, SCSS</li>
                    <li>additional aspects handled:
                      <ul className='list-disc [&>li]:ml-4'>
                        <li>localisation</li>
                        <li>accessibility. The product I worked on achieved WCAG level AA (<Link to="https://www.yoti.com/blog/yoti-identity-verification-achieves-wcag-level-aa-for-accessibility/" external />)</li>
                      </ul>
                    </li>
                    <li>contributed heavily to a face capture component. Available on <Link to='https://www.npmjs.com/package/@getyoti/react-face-capture' external>npm</Link></li>
                    <li>contributed to the shared components library (cross-team). Wrote Storybook initial setup, and many component and stories afterwards.</li>
                    <li>created additional tools:
                      <ul className='list-disc [&>li]:ml-4'>
                        <li>a mock server to easily run offline any scenario</li>
                        <li>a session manager for QA and product, useful for testing and demos. Distributed as an internal Electron application</li>
                      </ul>
                    </li>
                    <li>created a few node.js scripts for automating manual checks</li>
                    <li>wrote documentation: conventions, glossary, process, technical investigations.</li>
                    <li>used many state management approaches: top level setState, context, Redux, Zustand.</li>
                  </ul>
                </div>
              </details>

              <p>
                Tools used: <Tags tags={['React', 'express','Storybook', 'CSS modules', 'SCSS', 'webpack', 'vite']} />
              </p>
            </div>
          )
        },
        {
          header: '04/2021 - 08/2021',
          subHeader: 'Senior Front-end developer',
          body: (
            <>
              <p>Promoted to senior level.</p>

              <ul className='list-disc [&>li]:ml-4 mb-4'>
                <li>Excellent communication, to ensure best and pragmatic solution is chosen, and refined.</li>
                <li>Major contributor to front-end architecture reviews, proposing ways for improving the codebase.</li>
                <li>Implemented a developer-driven process for addressing tech debt continuously, which boosted developer productivity.</li>
              </ul>
              
              <p>
                I always had a very proactive attitude, and collaborated closely with all relevant parties. I would be known for getting heavily involved during feedback sessions with design, product, and other developers, to insure consistency, reduced complexity, and overall best outcome.
              </p>
            </>
          )
        },
        ]} />
   </div>    
  )
}

export default YotiDetails