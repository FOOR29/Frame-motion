'use client'
import { motion } from "motion/react"

// 1. Definimos la coreografía (Variants)
const contenedor = {
    oculto: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1 // El secreto: retraso entre hijos
        }
    }
}

const letra = {
    oculto: { y: 20, opacity: 0 }, // Empieza abajo e invisible
    visible: { y: 0, opacity: 1 }  // Sube y aparece
}

const LetterforLetter = () => {
    const texto = " Stephen King".split(""); // Convierte string en array
    return (
        <motion.div
            className="font-medium text-2xl"
            variants={contenedor}
            initial="oculto"
            animate="visible"
            style={{ display: "flex" }}
        >
            {texto.map((char, index) => (
                <motion.span key={index} variants={letra}>
                    {char}
                </motion.span>
            ))}
        </motion.div>
    )
}

export default LetterforLetter