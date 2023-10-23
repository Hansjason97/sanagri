import React, {useRef} from 'react'
import { motion } from 'framer-motion'

function Reveal({children}) {

    const scrollRef = useRef(null)

  return (
    <motion.div
    initial={{ opacity: 0, y: 75 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{duration: 1, delay: .25}}
    viewport={{ root: scrollRef, once: true }}>
        {children}
    </motion.div>
  )
}

export default Reveal