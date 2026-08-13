Aplicación web interactiva diseñada para la generación dinámica de paletas de colores aleatorias.

Proyecto Integrador #1
Desarrollado por: Edison Minango
link: https://edisonvasque1996-create.github.io/Proyecto_Integrador_M1_Colorfly/ 

TECNOLOGIAS UTILIZADAS 

- HTML5: Para una estructura de contenido semántica e idónea.
- CSS3: Para el diseño, estilo y la optimización de la interfaz visual.
- JavaScript: Para la lógica de negocio y la manipulación dinámica del DOM, permitiendo la generación aleatoria de paletas en tiempo real.

ESTRUCTURA DEL PROYECTO
 
Proyecto_Integrador_M1_Colorfly/
├── index.html          # Estructura principal y semántica
├── css/
│   └── styles.css      # Estilos y diseño visual
├── js/
│   └── script.js       # Lógica de manipulación del DOM y generación de paletas
└── README.md           # Documentación del proyecto


FUNCIONALIDAD Y PROPOSITO

Esta aplicación está diseñada para servir como una herramienta de apoyo visual y creativo. Su función principal es generar paletas de colores aleatorias que ayudan a explorar nuevas combinaciones tonales, facilitando la toma de decisiones en proyectos de diseño, desarrollo web y creación artística. Permite descubrir rápidamente gamas de colores armónicas o contrastantes para visualizar y aplicar distintas tonalidades dentro de un espacio o interfaz.


- INSTRUCCION DEL USO

1) Seleccionar la cantidad de colores: En la barra de herramientas ubicada en la parte superior de la página, elige el número de colores que deseas incluir en tu paleta (puedes seleccionar entre 6, 8 o 9 colores según tus necesidades).

2) Generar la paleta: Haz clic en el botón "Generar colores" ubicado en el panel derecho.

3) Visualizar los resultados: Inmediatamente se mostrará en la parte inferior la paleta generada de forma aleatoria, detallando para cada color su respectivo código en formato HEX y su valor en espacio de color HCL.

- DESICIONES TECNICAS

1) Estructura Base y Arquitectura (Rama Principal)

El desarrollo partió de una arquitectura limpia basada en los fundamentos del DOM y las directrices del proyecto, priorizando el uso de etiquetas HTML5 semánticas (<aside>, <main>, <section>) para comunicar claramente el propósito de cada sección.

Se aseguró una estricta separación de responsabilidades: diseño visual delegado al CSS externo (evitando estilos inline) y la lógica de negocio y reactividad manejada mediante JavaScript modular.

2) Evolución visual y de interfaz

A partir de la estructura base, se implementaron iteraciones enfocadas en optimizar la experiencia del usuario, mejorando la disposición visual de las tarjetas de colores, la fluidez en las interacciones y la adaptabilidad de la herramienta.

Se unificaron los estilos visuales para garantizar la compatibilidad con los modos de visualización (como el soporte coherente de tarjetas y paletas dinámicas de 6, 8 o 9 elementos).

3) Interactividad y Control de Estado en el Cliente

Generación Dinámica: Implementación de algoritmos en JavaScript para la creación procedural de colores aleatorios en formatos de color configurables.

Gestión de Funcionalidades Avanzadas: * Incorporación de un sistema de bloqueo de colores individuales mediante iconos (candados) para preservar selecciones específicas durante la generación de nuevas paletas.

Integración de un portapapeles interactivo con retroalimentación visual inmediata mediante notificaciones flotantes tipo Toast.

Almacenamiento local persistente (localStorage) para guardar paletas favoritas directamente desde la barra lateral, permitiendo su consulta posterior y eliminación individualizada.

PROMPS ENLACE EN DRIVE: 
