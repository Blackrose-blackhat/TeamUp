"use client"
import { Skeleton } from "@/components/ui/skeleton"
import { motion } from "framer-motion"

const Loading = () => {
  return (
    <motion.div className="flex p-10 items-center space-x-4">
      
      <motion.h5>Loading</motion.h5>
    </motion.div>


  )
}

export default Loading