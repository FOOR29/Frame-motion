'use client'
import { motion } from "motion/react";

const TextoH1 = () => {
    return (
        <div>
            <motion.h1
                className="font-bold text-4xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Welcome to derry
            </motion.h1>
        </div>
    )
}

export default TextoH1