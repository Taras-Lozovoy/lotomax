// import React from 'react'
// import {AnimatePresence, motion} from 'framer-motion'
// import classes from './AnimatedPage.module.css'
//
// const AnimatedPage = (props) => {
//     const {children, direction} = props
//     const animations = {
//         initial: {opacity: 0, x: direction === 'right' ? -1000 : 1000},
//         animate: {opacity: 1, x: 0},
//         exit: {opacity: 0, x: direction === 'right' ? 1000 : -1000},
//     }
//
//     return (
//         <AnimatePresence>
//             <motion.div
//                 variants={animations}
//                 initial="initial"
//                 exit="exit"
//                 animate="animate"
//                 transition={{duration: 1}}
//                 className={classes.main}
//             >
//                 {children}
//             </motion.div>
//         </AnimatePresence>
//     )
// }
//
// export default AnimatedPage