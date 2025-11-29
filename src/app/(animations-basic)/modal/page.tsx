// app/modal/page.tsx (por ejemplo)
"use client";

import { useState } from "react";
import Modal from "@/src/components/Modal";

const Page = () => {
    // 1. Estado que controla si el modal está abierto
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6">
            {/* 2. Card que al hacer clic abre el modal */}
            <div
                onClick={() => setOpen(true)}
                className="cursor-pointer bg-white shadow-md rounded-lg p-4 w-64"
            >
                <h3 className="text-lg font-semibold">Product card</h3>
                <p className="text-sm text-gray-600">Haz clic para ver más detalles.</p>
            </div>

            {/* 3. Modal recibe la prop open y la función para cerrarlo */}
            <Modal open={open} onClose={() => setOpen(false)} />
        </div>
    );
};

export default Page;
