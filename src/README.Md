# Leccion 2: Repetir animaciones cambiando una “clave” o estado

**Otra forma de “reiniciar” una animación es cambiar la key del componente o el valor de animate desde el estado de React:**

```jsx
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
```

- Cada vez que cambias `key`, React destruye y vuelve a montar el componente, y Motion vuelve a ejecutar `initial → animate`.​

- Mentalmente: es como borrar una pizarra y volver a escribir el texto desde cero, así ves otra vez el `“efecto aparición~`~.

---
<br>

## Construir un modal con Entradas y salidas con AnimatePresence.

## **Paso 1: controlar el estado en la página**

**Piensa así:**

- La página es el “dueño” de la información: sabe si el modal está abierto o cerrado.

- El Modal solo dibuja la ventana “si le dicen que está abierta”.

### Puedes crear una vista o un componente llamado modal asi:

```jsx
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
```
> se usa 'use client' porque en next esto se maneja del lado del cliente

**Aquí la analogía es:**

- `open` es como un interruptor de luz (true = encendido, false = apagado).

- El card es tu dedo, que al hacer clic cambia el interruptor a `true` y enciende el modal.

## **Paso 2: corregir y completar tu componente Modal**

**Ahora ajustamos tu Modal para que use open y también tenga una forma de cerrarse `(onClose)`.**

**Además, lo hacemos “modal real”: fondo oscuro + caja en el centro, animados con Motion.​**

```jsx
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
```

**Qué está pasando:**

- `<AnimatePresence>` permite que Motion use la prop exit cuando open pasa de true a false.​

- El `backdrop` (`motion.div` grande, `fixed inset-0`) se desvanece con opacity cuando aparece y desaparece.​

- La caja del modal aparece tipo `“pop”`:

1. **Empieza pequeña y un poco arriba (scale: 0.9, y: -20, opacity: 0).**
2. **Termina a tamaño normal en el centro (scale: 1, y: 0, opacity: 1).**

## **Paso 3: entiende la lógica como si fueran interruptores**

**Resumiendo la lógica con una metáfora:**

- `open` es un interruptor de luz guardado en la página.

- La card es el dedo que enciende el interruptor `(setOpen(true))`.

- El Modal mira ese interruptor `(open)` y dice:

**Si está en `false` → no pinto nada.**
**Si está en `true` → pinto el modal y uso Motion (`initial`, `animate`, `exit`) para entrar y salir suave.​**

**Cuando pulses cerrar `(onClose)` o fuera del modal, se llama `setOpen(false)`, AnimatePresence detecta que el hijo se va y ejecuta la animación de exit antes de quitarlo del DOM.​**