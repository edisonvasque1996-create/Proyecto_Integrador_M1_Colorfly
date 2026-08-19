
# 🎨 Colorfly Studio | Generador & Gestor de Paletas de Colores

> **Proyecto #1 | Módulo 1**  
> **Desarrollado por:** Edison Minango  
> **Demo en Vivo:** [Colorfly Studio en GitHub Pages](https://edisonvasque1996-create.github.io/Proyecto_Integrador_M1_Colorfly/)

![Demostración de Colorfly Studio](https://lh3.googleusercontent.com/d/1n1-GzyFanFILH18WNqRPzIw7-CPqVEJr)

---

## Descripción del Proyecto

**Colorfly Studio** es una herramienta web interactiva de apoyo visual y creativo diseñada para la generación y gestión procedural de paletas de colores. Su objetivo principal es facilitar la exploración cromática y agilizar la toma de decisiones en proyectos de diseño UI/UX, desarrollo web y creación artística.

La aplicación permite descubrir combinaciones tonales armónicas o contrastantes, ajustar la cantidad de elementos en la paleta, bloquear colores específicos y guardar selecciones favoritas de forma persistente.

---

## Índice

- [Descripción del Proyecto](#-descripción-del-proyecto)
- [Características Principales](#-características-principales)
- [Flujo de Uso y Funcionalidades](#-flujo-de-uso-y-funcionalidades)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Decisiones Técnicas y Arquitectura](#-decisiones-técnicas-y-arquitectura)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Autor](#-autor)
- [Prompts de IA Utilizados - Colorfly Studio](#-prompts-ia)

---

## Características Principales

- **Generación Dinámica:** Creación instantánea de paletas cromáticas mediante algoritmos de generación procedimental.
- **Bloqueo de Colores (Lock System):** Permite fijar tonalidades específicas mediante un icono de candado mientras se regeneran los colores restantes.
- **Gestión de Formatos:** Consulta de valores cromáticos en espacios de color Hexadecimal (HEX) y HCL.
- **Copiado en Un Clic:** Integración con la API del portapapeles (*Clipboard API*) para copiar códigos de color con retroalimentación visual inmediata (notificaciones tipo *Toast*).
- **Persistencia Local:** Guardado de paletas favoritas en el navegador utilizando `localStorage`.
- **Diseño Responsive:** Interfaz adaptativa optimizada para dispositivos móviles, tablets y monitores de alta resolución utilizando CSS Grid y Flexbox.
- **Zero Dependencies:** Desarrollado 100% con JavaScript Vanilla para garantizar un rendimiento óptimo y una carga ultrarrápida sin librerías externas.

---

## Flujo de Uso y Funcionalidades

### Guía Paso a Paso

1. **Configurar el tamaño de la paleta:** En el panel lateral, selecciona la cantidad de colores deseada (6, 8 o 9 bloques cromáticos).
2. **Elegir formato de color:** Define el espacio de color preferido para visualizar las tarjetas.
3. **Generar colores:** Haz clic en el botón **"Generar colores"** para obtener una combinación aleatoria.
4. **Bloquear tonalidades:** Si te gusta un color en particular, haz clic en el icono de candado para mantenerlo fijo en las siguientes generaciones.
5. **Copiar al portapapeles:** Haz clic sobre el código del color deseado para copiarlo directamente.
6. **Guardar en Favoritos:** Almacena la paleta completa en tu panel de guardados para consultarla o gestionarla posteriormente.

---

## Tecnologías Utilizadas

- **HTML5:** Marcado semántico y accesible (`<aside>`, `<main>`, `<section>`).
- **CSS3:** Manipulación de variables nativas (*Custom Properties*), Flexbox, CSS Grid Layout y animaciones/transiciones de interfaz.
- **JavaScript (ES6+):** Manipulación dinámica del DOM, gestión de eventos, interactividad y persistencia con `localStorage`.

---

## Decisiones Técnicas y Arquitectura

### 1. Estructura Base y Separación de Responsabilidades
El desarrollo se basó en una arquitectura modular limpia, asegurando la estricta separación de responsabilidades:
- **Estructura Semántica:** Marcado HTML5 estándar para mejorar la accesibilidad e indexación.
- **Diseño Separado:** Todos los estilos visuales residen en hojas externas (CSS), evitando el uso de estilos en línea (*inline styles*).
- **Lógica Reactiva:** Manejo del estado de la aplicación, interacción con el cliente y algoritmos de color aislados en JavaScript modular.

### 2. Diseño de Interfaz e Iteraciones Visuales
Se implementaron iteraciones enfocadas en optimizar la experiencia de usuario (UX):
- Disposición adaptativa de las tarjetas para garantizar la coherencia estética en configuraciones de 6, 8 o 9 elementos.
- Notificaciones flotantes (*Toasts*) para dar retroalimentación clara e inmediata en acciones como copiado y guardado.

### 3. Control de Estado en el Cliente
- **Sistema de Candados:** Control dinámico que filtra únicamente los elementos no bloqueados al invocar la función de regeneración.
- **Persistencia de Datos:** Uso de `localStorage` para almacenar objetos de paletas guardadas, permitiendo la recuperación o eliminación individualizada sin necesidad de un backend.

---

## Estructura del Proyecto

![Estructura del proyecto](https://lh3.googleusercontent.com/d/1b0DGXG6sWlKKGkQGYps3nH4viG0bAGqK)

---

## Autor

**Edison Minango**
**Arquitecto & Desarrollador Web Full Stack en formación**
- **Proyecto:** Colorfly Studio — Generador & Gestor de Paletas
- **GitHub:** [@edisonvasque1996-create](https://github.com/edisonvasque1996-create)

---

## Prompts de IA Utilizados - Colorfly Studio

**[Ver Documentación de Prompts](./docs/PROMPTS.md)**

[⬆ Volver al README principal](./README.md)

