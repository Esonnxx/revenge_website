'use client'

import { motion } from 'framer-motion'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 1, opacity: 1 }}
      exit={{ y: 0, opacity: 0 }}
      transition={{
        type: 'tween',
        delay: 0.5,
        ease: 'easeInOut',
        duration: 1,
      }}>
      {children}
    </motion.div>
  )
}
