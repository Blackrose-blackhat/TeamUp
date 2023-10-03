import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className='mx-auto flex max-w-3xl flex-col justify-start px-10 py-10'>
      <Image
        src="/logo.svg"
        alt='logo'
        width={174}
        height={174}
        />
      <h1 className=' mt-12 px-2 text-slate-700 text-3xl font-semibold'>
          Details
      </h1>
      <p className='mt-3 px-2 text-base'>
        Let's quickly get you in!
      </p>
    </main>
  )
}

export default page