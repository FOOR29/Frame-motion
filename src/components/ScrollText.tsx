'use client'
import { motion } from "motion/react"

const ScrollText = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, x: -100 }} // Empieza invisible a la izquierda
                whileInView={{ opacity: 1, x: 0 }} // Al verse, aparece y va al centro
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.5 }} // Configuración importante
            >
                <h2
                    className="font-black text-3xl py-5"
                >¡Aparecí al hacer scroll!</h2>
            </motion.div>
        </div>
    )
}

export default ScrollText