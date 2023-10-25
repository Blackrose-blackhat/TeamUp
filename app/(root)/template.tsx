
"use client"
import { motion } from "framer-motion"



export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      layout
      initial={{scale:0}}
      whileInView={{scale:1}}
      
    >
      {children}
    </motion.main>
  )
}