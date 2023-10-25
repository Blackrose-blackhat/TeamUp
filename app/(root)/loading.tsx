"use client"
import { Skeleton } from "@/components/ui/skeleton"
import { motion } from "framer-motion"
import {PropagateLoader} from "react-spinners"
const Loading = () => {
  return (
    <motion.div className="flex flex-row justify-center items-start h-screen w-full">
      
      <PropagateLoader color="#36d7b7" />
    </motion.div>


  )
}

export default Loading