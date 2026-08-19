## Bitácora de Desarrollo e Prompts AI

Historial de iteraciones, refactorizaciones y soluciones implementadas durante el desarrollo del proyecto:

---

### 1. Refactorización Semántica y Accesibilidad
> **Prompt / Solicitud:**
> *"Es esta la estructura base de mi pagina web, quiero ver si se podria mejorar a nivel semantico sin afectar los archivos js y css que igual ya estan establecidos."*

* **Solución:** Refactorización semántica en HTML5 garantizando 100% de compatibilidad con los identificadores (`id`) y clases (`class`) existentes.
* **Implementación:**
  * Reemplazo de contenedores genéricos `<div>` por etiquetas semánticas: `<aside>` para el panel de controles y `<main>` para el visualizador principal.
  * Incorporación de atributos de accesibilidad WCAG (`aria-label`, `role="region"`).

---

### 2. Funcionalidades de Interacción y Persistencia
> **Prompt / Solicitud:**
> *"Analiza mi código (...), quiero que le agregues un icono dentro de la paleta donde se pueda bloquear el color. Añadiendo a ello agrégale un icono para copiar que se quede guardado en portapapeles. A su vez agrégale una parte donde sea de guardado que valga guardar las paletas de colores y se quede ahí dentro de la barra lateral izquierda. A su vez que hay un icono donde pueda borrar esa paleta de colores."*

* **Solución:** Integración de lógica interactiva en el DOM y persistencia de datos local.
* **Implementación:**
  * **Sistema de Bloqueo:** Preservación de colores seleccionados al regenerar la paleta.
  * **Persistencia (`localStorage`):** Guardado de paletas favoritas directo en el navegador.
  * **Copiado Rápido:** Copiado al portapapeles con notificación flotante (*Toast feedback*).
  * **Gestión de Historial:** Eliminación individual de paletas guardadas en el panel lateral.

---

### 3. Fondo Dinámico y Acoplamiento de Estilos
> **Prompt / Solicitud:**
> *"El fondo de mi pagina web note que hay dos fondos como tal en el lado derecho solo quiero un fondo y este que sea dinamico cuando cambie la paleta de colores acoplandose un poco a los colores dispuestos."*

* **Solución:** Depuración de capas CSS y generación de degradados dinámicos mediante JavaScript.
* **Implementación:**
  * Unificación de la vista derecha en el contenedor `.palette-backdrop`.
  * Algoritmo JS que extrae los colores extremos (inicial y final) para aplicar un `linear-gradient` dinámico con opacidad suavizada.

---

### 4. Diseño Adaptativo (Responsive Design)
> **Prompt / Solicitud:**
> *"Mira mi proyecto esta asi pero quiero que cuando sea formato tablet no aparezca el fondo de madera quiero que la pagina web sea vaya desde izquierda a derecha que no exista vacio corrigue el codigo."*

* **Solución:** Adaptación mediante *Media Queries* en CSS para dispositivos móviles y tablets.
* **Implementación:**
  * Reorganización del maquetado a flujo vertical para pantallas menores a `1024px` (`max-width: 1024px`).
  * Eliminación de márgenes rígidos para extender el contenido al 100% del ancho disponible (`width: 100%`).

---

### 5. Control de Versiones y Convenciones de Git
> **Prompt / Solicitud:**
> *"¿Qué mensajes de commit me recomiendas para solucionar el problema de que GitHub no mostraba o no detectaba bien la estructura de las carpetas?"*

* **Solución:** Estandarización de commits bajo la norma **Conventional Commits**.
* **Ejemplos recomendados:**
  ```bash
  fix: corregir visibilidad de carpetas y estructura de archivos en el repositorio
  refactor: reorganizar estructura del proyecto para corregir el reconocimiento de directorios en GitHub

---

### Anexo 1
![Anexo 1 - Promp gemini](https://lh3.googleusercontent.com/d/1HW9NB9x752ouBPMXVne1Cln209n0wVfl)


### Anexo 2
![Anexo 2 - Promp gemini](https://lh3.googleusercontent.com/d/1xAgBIgddAFZn40nltt62JzeP_TZiQNwZ)


### Anexo 3
![Anexo 3 - Promp gemini](https://lh3.googleusercontent.com/d/1CzlqcKmegQE3POjMTjculBmCcDSG0nmc)


### Anexo 4
![Anexo 4 - Promp gemini](https://lh3.googleusercontent.com/d/1GLp2R7F8w6MbeiBh8F4ywPjmyJGrvVms)

### Anexo 5
![Anexo 5 - Promp gemini](https://lh3.googleusercontent.com/d/1EuDxEwK11MUlHoWhkEDWmF1YJWIXEfqW)




