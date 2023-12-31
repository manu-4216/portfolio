import React from 'react'
import { type Step } from '@/data/pathwaySteps'
// import experiences, { getById} from '@/data/experiences'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogDescription,
  AlertDialogTrigger,
  AlertDialogTitle,
  AlertDialogFooter,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import PinDetails from '@/components/ui/pathway/details/pinDetails'
import { Calendar, Building, Link } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const transitionViewIfSupported = (updateCb: Function) => {
  // @ts-expect-error
  if (document.startViewTransition) {
    // @ts-expect-error
    document.startViewTransition(updateCb);
  } else {
    updateCb();
  }
}

type Props = {
  step: Step
}
const PinContent = (props: Props) => {
  const { step } = props
  const { id, shortTitle, content, tags, type, featured, longTitle, date, org } = step
  const [open, setOpen] = React.useState(false);
  const title = longTitle || shortTitle

  const openDialog = () => {
    transitionViewIfSupported(() => {
      setOpen(true)
    })
  }

  const closeDialog = () => {
    transitionViewIfSupported(() => {
      setOpen(false)
    })
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <div onClick={() => openDialog}>
          {shortTitle} {org?.name}
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent handleOverlayClick={() => closeDialog()}>
        <AlertDialogHeader>
          <AlertDialogTitle className='text-left flex justify-between items-baseline'>
            <div>
              <div className='mb-2'>
                {title}
              </div>
              {org && (
                <div className='flex no-wrap'>
                  <Building />
                  <div>{org.name}  </div>
                  <a href={org.website} target="_blank" rel="noopener noreferrer">
                    <Link strokeWidth={3} className='ml-2 w-3'/>
                  </a>
                </div>
              )}
            </div>
            <div className='flex flex-col gap-2 items-end'>
              {date && (
                  <Badge className='rounded-sm' variant='destructive'>{date}</Badge>
              )}
              {org?.location &&
                <Badge className='rounded-sm w-fit'>
                  {org?.location}
                </Badge>
              }
            </div>
          </AlertDialogTitle>
          <Separator className='my-2' />
        </AlertDialogHeader>

        <AlertDialogDescription>
          <PinDetails step={step}>
          </PinDetails>
        </AlertDialogDescription>

        <AlertDialogFooter>
          <div onClick={() => setOpen(false)}><Button>Ok</Button></div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default PinContent