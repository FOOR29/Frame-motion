# FRAME MOTION

### Introduccion

**Motion (antes “Framer Motion style”) es una librería de animaciones para React que convierte tus `<div>`, `<button>`, etc. en componentes capaces de moverse, desvanecerse, escalar, reaccionar al scroll y a gestos, de forma muy simple y muy fluida.​**

 **Se instala con npm y se usa a través de un componente especial motion que acepta props como initial, animate, whileHover, whileInView y exit.​**


## 1) ¿Que es motion?

<div align="center">
  <img src="./public/gif/thinking-om-nom.gif" width="70" />
</div>
<br>

**Piensa en Motion como una “caja mágica” que envuelve tus elementos de React: en vez de usar `<div>`, usas `<motion.div>`, y esa caja puede decirle al navegador “empieza invisible y luego hazte visible”, “muévete hacia la derecha”, “hazte grande al pasar el mouse”, etc.​**

**En términos simples: Convierte elementos aburridos en elementos vivos.**

**Para usarlo, primero debes instalarlo en tu proyecto**

```bash
npm install motion
```

---

## 2) La Lógica Básica

<div align="center">
  <img src="./public/gif/reading-nibble-nom.gif" width="130" />
</div>
<br>

**Para animar algo, dejamos de usar el div normal (la caja tonta) y usamos motion.div (la caja inteligente).**

**Esta caja inteligente entiende tres instrucciones principales:**

- `initial` dice “cómo empieza” el componente cuando aparece en pantalla.

- `animate` dice “a qué estado debe llegar” y Motion anima automáticamente entre ambos.

### Props clave que vas a usar mucho

- `initial`: estado inicial (por ejemplo, oculto, más pequeño, desplazado).

- `animate`: estado objetivo (visible, en su sitio, a tamaño normal).

- `transition`: estado objetivo (visible, en su sitio, a tamaño normal).

- `whileHover, whileTap`: estados mientras pasas el mouse o haces clic/toque

- `whileInView`: estado mientras el elemento está dentro del viewport (al hacer scroll)

- `exit`: cómo se anima cuando desaparece del árbol de React (se usa con AnimatePresence).

### Entendiendo los Ejes (X, Y, Z)

<div align="center">
  <img src="./public/gif/thinking2-om-nom.gif" width="130" />
</div>
<br>

**Para mover cosas, necesitas decirle hacia dónde ir. Imagina que estás sentado en tu escritorio:**

**1. Eje X (Horizontal): Es como mover tu cabeza diciendo "No".**
- x: 100 (Moverse a la derecha).
- x: -100 (Moverse a la izquierda).

**2. Eje Y (Vertical): Es como mover tu cabeza diciendo "Sí".**

- y: 100 (Moverse hacia abajo, ¡ojo! en web el positivo es abajo).

- y: -100 (Moverse hacia arriba, como un globo).

**3. Eje Z (Profundidad): Es como acercar tu cara al monitor o alejarla.**

- scale (Escala): A menudo usamos scale en lugar de Z para simular que algo se acerca o se aleja.

---

<br>

# Animar textos y cards (ejemplos prácticos)

### Ejemplos Práctico #1

**Vamos a crear una tarjeta que, al pasar el mouse, se hace grande (como si tomara aire) y al hacer clic se encoge.**

**Usaremos los ayudantes mágicos `whileHover (mientras el mouse está encima)` y `whileTap (mientras presionas)`.​**



