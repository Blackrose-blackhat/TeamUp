import React from 'react'
import { FadeLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className='flex flex-col h-screen items-center justify-center'>
      <FadeLoader />
    </div>
  )
}

export default Loading