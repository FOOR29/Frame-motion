'use client'
import { motion } from "motion/react"

// aca aplicamos un efecto con motion, que mostrara las card 1 por una una con transicion suave

// se crea un arrays para no repetir el proceso
const gridContainerVarients = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.10,
        }
    }
}

// y esta la usaremos en los div o cards que queramos animar escalonadamente
const gridSquareVarients = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}

const AnimationsPage = () => {
    return (
        <div className="flex flex-col gap-10 overflow-x-hidden">
            <motion.section
                variants={gridContainerVarients} // y las llamamos aca
                initial="hidden"
                animate="show"
                className="grid grid-cols-3 p-10 gap-10">
                <motion.div
                    variants={gridSquareVarients} // y se llama en cada variants
                    className="bg-slate-800 aspect-square rounded-lg justify-center flex ite gap-10"></motion.div>
                <motion.div
                    variants={gridSquareVarients}
                    className="bg-slate-800 aspect-square rounded-lg justify-center flex ite gap-10"></motion.div>
                <motion.div
                    variants={gridSquareVarients}
                    className="bg-slate-800 aspect-square rounded-lg justify-center flex ite gap-10"></motion.div>
                <motion.div
                    variants={gridSquareVarients}
                    className="bg-slate-800 aspect-square rounded-lg justify-center flex ite gap-10"></motion.div>
                <motion.div
                    variants={gridSquareVarients}
                    className="bg-slate-800 aspect-square rounded-lg justify-center flex ite gap-10"></motion.div>
                <motion.div
                    variants={gridSquareVarients}
                    className="bg-slate-800 aspect-square rounded-lg justify-center flex ite gap-10"></motion.div>
            </motion.section>
        </div>
    )
}

export default AnimationsPage