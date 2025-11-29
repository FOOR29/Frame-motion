'use client'
import { motion } from "motion/react";

const CardHover = () => {
    return (
        <motion.div
            className="bg-sky-700 w-39 h-50 flex justify-center items-center flex-col rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
            transition={{ duration: 0.4 }}
        >
            <h2>Producto</h2>
            <p>Descripción breve.</p>
        </motion.div>
    )
}

export default CardHover