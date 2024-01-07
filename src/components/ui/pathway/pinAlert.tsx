import React, { useState } from 'react'
import { type Step } from '@/data/pathwaySteps'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
  AlertDialogTitle,
  AlertDialogFooter,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import PinDetails from '@/components/ui/pathway/details/pinDetails'
import { Building, Link, Star, HelpCircle, Check } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import Entity from './entity'

type Props = {
  step: Step
}
const PinContent = (props: Props) => {
  const { step } = props
  const { id, shortTitle, type, featured, longTitle, date, org } = step
  const [open, setOpen] = useState(false)
  // const [seen, setSeen] = useState(false)
  const title = longTitle || shortTitle

  const openDialog = () => {
    setOpen(true)
    // setSeen(true)
  }

  const closeDialog = () => {
    setOpen(false)
  }
  const textSizeClass = type === 'start' ? 'text-sm' : 'text-xs'

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <div onClick={() => openDialog}>
          <div className={`${textSizeClass} font-bold`}>
            {shortTitle}
          </div>
          <Entity type={type} org={org} />
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className='gap-0' handleOverlayClick={() => closeDialog()}>
        <AlertDialogHeader>
          <AlertDialogTitle className='text-left flex justify-between items-baseline'>
            <div>
              <div className='mb-1'>
                {title}
              </div>
              {org && (
                <div className='flex no-wrap items-center'>
                  {org.name && <Building size={15} />}
                  <div className='ml-1 text-sm'>{org.name}</div>
                  {org.website && <a href={org.website} target="_blank" rel="noopener noreferrer">
                    <Link strokeWidth={3} className='ml-2 w-3'/>
                  </a>}
                </div>
              )}
            </div>
            <div className='flex flex-col gap-2 items-end'>
              {date && (
                  <Badge className='rounded-sm text-nowrap' variant='destructive'>{date}</Badge>
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

        <div className='max-h-[calc(100vh-250px)] overflow-y-scroll'>
          <PinDetails step={step}>
          </PinDetails>
        </div>

        <AlertDialogFooter className='shadow-top pt-4'>
          <div onClick={() => setOpen(false)} className='ml-auto'>
            <Button size="sm" variant='ghost'>Ok, close</Button>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default PinContent