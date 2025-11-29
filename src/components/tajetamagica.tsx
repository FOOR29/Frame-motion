'use client'

import { motion } from "motion/react"

const TarjetaMagica = () => {
    return (
        <motion.div
            // Estado inicial (quieto)
            initial={{ scale: 1 }}

            // Reacción al pasar el mouse (se acerca)
            whileHover={{ scale: 1.1, rotate: 2 }}

            // Reacción al hacer clic (se presiona)
            whileTap={{ scale: 0.9 }}

            // Estilos básicos (como CSS)
            style={{
                width: 200,
                height: 200,
                backgroundColor: "red",
                borderRadius: 20,
            }}
        />
    )
}

export default TarjetaMagica