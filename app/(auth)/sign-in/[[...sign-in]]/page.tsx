"use client"
import { SignIn } from '@clerk/nextjs'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-row h-screen justify-center align-middle items-center'>
      
      <motion.div whileHover={{scale:1.1}} >
      <SignIn />
      </motion.div>
      
    </div>
    
  )
}

export default page