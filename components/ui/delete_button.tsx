"use client"
import { deleteGigsById } from '@/lib/actions/Gigs.action'
import { motion } from 'framer-motion'
import { DeleteIcon, Trash2Icon } from 'lucide-react'
import Image from 'next/image'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
interface props{
    authorId:string
}
const DeleteButton = ({ authorId } :props) => {
    
    const router = useRouter();
    const handleDelete = async(authorId:any) => {
        try {
            await deleteGigsById(authorId);
            
            router.refresh();
        } catch (error) {
            
        }
    }
  return (
    <motion.button 
    whileHover={{
      scale:1.1,
    }}
    whileTap={{
      scale:0.5
    }}
      onClick={() => handleDelete(authorId)}>
      <Image src="/assets/delete.svg" alt='delete' width={30} height={30} />
     
    </motion.button>
  )
}

export default DeleteButton