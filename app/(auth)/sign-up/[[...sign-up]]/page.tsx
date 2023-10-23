import { SignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col justify-center align-middle items-center h-screen'>
      <SignUp />
    </div>
    
  )
}

export default page