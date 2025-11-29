'use client'
import { motion } from "motion/react"

const ScrollView = () => {
    return (
        <div>
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                <h2
                    className="font-black text-3xl py-3.5"
                >Sección servicios</h2>
            </motion.section>
        </div>
    )
}

export default ScrollView