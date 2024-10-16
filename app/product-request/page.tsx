import OpenRequestCard from '@/components/open-request-card'
import { SortButton } from '@/components/sort-button'
import { Button } from '@/components/ui/button'
// import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const ProductRequestPage = () => {
  return (
    <div className='flex flex-col justify-start items-center gap-12 py-10'>
      <div className='w-full flex justify-between items-center'>
        <SortButton />
        <Button variant='default' size='lg' className='text-center flex items-center gap-1'>
          <span className='text-lg'>+</span>
          New Request
        </Button>
      </div>
      <div className='w-full flex flex-col justify-start items-start space-y-1 gap-4'>
        <OpenRequestCard />
        <OpenRequestCard />
        <OpenRequestCard />
        <OpenRequestCard />
        <OpenRequestCard />
      </div>
    </div>
  )
}

export default ProductRequestPage