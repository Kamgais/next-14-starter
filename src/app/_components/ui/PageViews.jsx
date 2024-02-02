import { wait } from '@/lib/posts'
import React from 'react'

export default async function PageViews() {
  await wait(3000);
  return (
    <div className='mt-4'>
      <p>View : 100</p>
    </div>
  )
}
