'use client'
import { motion } from "motion/react"
import { useState } from "react";

const TextoQueReaparece = () => {
    const [replayKey, setReplayKey] = useState(0);
    return (
        <div className="flex justify-center items-center flex-col">
            <button onClick={() => setReplayKey(k => k + 1)}>
                Repet
            </button>

            <motion.p
                key={replayKey}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="font-black text-4xl"
            >
                ¡Hello  again!
            </motion.p>
        </div>
    )
}

export default TextoQueReaparece