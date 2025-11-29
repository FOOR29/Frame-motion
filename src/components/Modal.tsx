// src/components/Modal.tsx
"use client";

import { AnimatePresence, motion } from "motion/react";

type ModalProps = {
    open: boolean;
    onClose: () => void;
};

const Modal = ({ open, onClose }: ModalProps) => {
    return (
        <AnimatePresence>
            {open && (
                // Backdrop (fondo oscuro)
                <motion.div
                    className="fixed inset-0 flex items-center justify-center bg-black/40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Cerrar al hacer clic fuera */}
                    <div
                        className="absolute inset-0"
                        onClick={onClose}
                    />

                    {/* Caja del modal */}
                    <motion.div
                        className="relative bg-amber-50 rounded-lg shadow-lg p-6 w-80"
                        initial={{ opacity: 0, scale: 0.9, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-lg font-bold">Products</h3>
                            <button
                                onClick={onClose}
                                className="text-sm text-gray-500 hover:text-gray-800"
                            >
                                ✕
                            </button>
                        </div>

                        <p className="text-sm text-gray-700">
                            Aquí van los detalles del producto. Puedes poner descripción, precio,
                            etc.
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
