import React, { type ReactNode } from 'react'
import AboutMeDetails from '@/components/ui/pathway/details/aboutMeDetails'
import HightSchoolDetails from '@/components/ui/pathway/details/highSchoolDetails'
import MastersDetails from '@/components/ui/pathway/details/mastersDetails'
import FccDetails from '@/components/ui/pathway/details/fccDetails'
import MainframeDetails from '@/components/ui/pathway/details/mainframeDetails'
import DassaultDetails from '@/components/ui/pathway/details/dassaultDetails'
import YotiFeDetails from '@/components/ui/pathway/details/yotiFeDetails'
import YotiFsDetails from '@/components/ui/pathway/details/yotiFsDetails'
import LearnBasicsDetails from '@/components/ui/pathway/details/learnBasicsDetails'
import KyndDetails from '@/components/ui/pathway/details/kyndDetails'
import type { Step } from '@/data/pathwaySteps'
import Tags from '@/components/ui/tags'
import {
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Separator } from '@/components/ui/separator'

const mapping: Record<Step['id'], (props: any) => JSX.Element> = {
  about: AboutMeDetails,
  'high-school': HightSchoolDetails,
  masters: MastersDetails,
  fcc: FccDetails,
  mainframe: MainframeDetails,
  dassault: DassaultDetails,
  "yoti-fe": YotiFeDetails,
  "learn-basics": LearnBasicsDetails,
  "yoti-fs": YotiFsDetails,
  kynd: KyndDetails,
}
type Props = {
  step: Step
}
const PinDetails = (props: Props) => {
  const { step } = props

  const Component = mapping[step.id]

  if (Component) {
    return (
      <>
        <div className='text-left mb-3 mt-3'>
          <Component step={step} />
          {step.tags && <Tags className='mt-3' tags={step.tags} />}
        </div>
      </>
    )
  }

  return 'not yet handled'

}

export default PinDetails