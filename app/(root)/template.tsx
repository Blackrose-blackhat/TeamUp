
"use client"
import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0.5, x: -200, y: -400,rotate:100 },
  enter: { opacity: 1, x: 0, y: 0 ,rotate:0},
  
}

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      layout
      initial={{opacity:0}}
      whileInView={{opacity:2}}
    >
      {children}
    </motion.main>
  )
}