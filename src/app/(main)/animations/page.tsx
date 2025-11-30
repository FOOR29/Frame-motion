'use client'
import { motion, useScroll } from "motion/react"

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

    const { scrollYProgress: completeProgress } = useScroll()

    return (
        <div className="flex flex-col gap-10 overflow-x-hidden">
            <motion.section
                variants={gridContainerVarients} // y las llamamos aca
                initial="hidden"
                animate="show"
                className="grid grid-cols-3 p-10 gap-10">

                {/* fade up */}
                <motion.div
                    variants={gridSquareVarients} // y se llama en cada variants
                    className="bg-slate-800 aspect-square rounded-lg justify-center items-center flex ite gap-10">
                    {/* animation reveal */}
                    <motion.div className="w-20 h-20 bg-stone-100 rounded-lg"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                    />
                    {/* aniamtion reveal 2 */}
                    <motion.div className="w-20 h-20 bg-stone-100 rounded-full"
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                    />
                </motion.div>

                {/* ahepe shifting */}
                <motion.div
                    variants={gridSquareVarients}
                    className="bg-slate-800 aspect-square rounded-lg justify-center items-center flex ite gap-10">
                    <motion.div className="w-1/3 h-1/3 shadow-md bg-rose-500"
                        animate={{
                            // se puede colocar varias scalas como PassThrough, ejemplo addUniqueItem, 1 = 0, 2 es igual a 90 y asi
                            scale: [1, 2, 2, 1],
                            rotate: [0, 90, 90, 0],
                            borderRadius: ['10%', '10%', '50%', '10%']
                        }}
                        transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1 }}
                    />
                </motion.div>

                {/* buton hover y tap */}
                <motion.div
                    variants={gridSquareVarients}
                    className="bg-slate-800 aspect-square rounded-lg justify-center items-center flex ite gap-10">
                    <motion.button className="bg-emerald-600 w-1/2 py-4 rounded-lg text-gray-100 font-light tracking-wide"
                        whileTap={{ scale: .9 }}
                        whileHover={{ scale: 1.1, backgroundColor: '#d1d5db', color: 'black' }}
                        transition={{ bounceDamping: 10, bounceStiffness: 600 }}
                    >
                        Following
                    </motion.button>
                </motion.div>

                {/* animacion de arrastrar */}
                <motion.div
                    variants={gridSquareVarients}
                    className="bg-slate-800 aspect-square rounded-lg justify-center items-center flex ite gap-10">
                    <motion.div className="w-1/3 h-1/3 bg-sky-600 rounded-3xl cursor-grab"
                        drag // drap te permire agarrar esa card o texto y moverla a tu antojo
                        // con dragconinter, se crea un contenedor para que no salga de dicha seccion o donde lo tengas
                        dragConstraints={{
                            top: -125,
                            right: 125,
                            bottom: 125,
                            left: -125
                        }}
                        // y esto es para que se pegue a las esquinas
                        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                    />
                </motion.div>

                {/* scroll progression */}
                <motion.div
                    variants={gridSquareVarients}
                    className="bg-slate-800 aspect-square rounded-lg justify-center items-center     flex ite gap-10">
                    <motion.div className="w-40 aspect-square bg-green-600 rounded-xl">
                        <motion.div className="w-full bg-green-950 rounded-xl h-full origin-bottom"
                            style={{ scaleY: completeProgress }}
                        />
                    </motion.div>
                </motion.div>

                {/* svg animacion */}
                <motion.div
                    variants={gridSquareVarients}
                    className="bg-slate-800 aspect-square rounded-lg justify-center items-center flex ite gap-10">
                    <motion.svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        className='w-1/2 stroke-amber-500 stroke-[0.5]'
                    >
                        <motion.path d='m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z' />
                    </motion.svg>
                </motion.div>
            </motion.section>
        </div>
    )
}

export default AnimationsPage