import React from 'react'
import styles from "./style.module.scss"
import { motion } from 'framer-motion'

interface Buttonprops {
    isActive: boolean;
    toggleMenu: () => void;
    
}

const Button = ({isActive, toggleMenu}: Buttonprops) => {
  return (
    <div className={styles.button}>
        <motion.div 
            className={styles.slider}
            animate={{top: isActive ? "-100%" : "0%"}}
            transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1]}}
        >
            <div 
                className={styles.el}
                onClick={() => {toggleMenu()}}
            >
                <PerspectiveText label="Menu"/>
            </div>
            <div 
                className={styles.el}
                onClick={() => {toggleMenu()}}
            >
                <PerspectiveText label="Close" />
            </div>
        </motion.div>
    </div>
  )
}

function PerspectiveText({label}:{label:string}) {
    return (    
        <div className={styles.perspectiveText}>
            <p>{label}</p>
            <p>{label}</p>
        </div>
    )
}

export default Button;
