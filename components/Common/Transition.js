import {
  motion,
} from 'framer-motion'

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

const Transition = ({children}) => (
  <motion.div
    variants={variants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{
      duration: .1,
    }}
  >
    {children}
  </motion.div>
)

export default Transition
