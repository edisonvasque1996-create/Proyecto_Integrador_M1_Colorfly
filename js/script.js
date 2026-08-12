// Referencias a elementos del DOM (incluyendo el nuevo selector de formato)
const generateBtn = document.getElementById('generate-btn');
const paletteSizeSelect = document.getElementById('palette-size');
const colorFormatSelect = document.getElementById('color-format');
const paletteContainer = document.getElementById('palette-container');
const toast = document.getElementById('toast');

/**
 * Genera un código de color HEX aleatorio.
 * @returns {string} 
 */
function getRandomHex() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/**
 * Convierte un color HEX aleatorio a su equivalente en formato HSL.
 * @param {string} hex 
 * @returns {string}
 */
function hexToHsl(hex) {
    let r = parseInt(hex.slice(1, 3), 16) / 255;
    let g = parseInt(hex.slice(3, 5), 16) / 255;
    let b = parseInt(hex.slice(5, 7), 16) / 255;

    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // Escala de grises
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
}

/**
 * Crea un array de objetos de color con formatos HEX y HSL.
 * @param {number} count 
 * @returns {Array}
 */
function generatePaletteArray(count) {
    const palette = [];
    for (let i = 0; i < count; i++) {
        const hex = getRandomHex();
        const hsl = hexToHsl(hex);
        palette.push({ hex, hsl });
    }
    return palette;
}

/**
 * Muestra una notificación visual temporal (Toast).
 */
function showToast() {
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

/**
 * Renderiza dinámicamente la paleta de colores en el DOM según el tamaño y formato elegidos.
 */
function renderPalette() {
    const size = parseInt(paletteSizeSelect.value, 10);
    const selectedFormat = colorFormatSelect.value; // 'hex' o 'hsl'
    const colorDataArray = generatePaletteArray(size);

    // Limpiar contenedor previo
    paletteContainer.innerHTML = '';

    // Iterar sobre el array para construir las tarjetas de color
    colorDataArray.forEach(colorObj => {
        const card = document.createElement('div');
        card.className = 'color-card';
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        
        // Determinar qué valor mostrar como principal según el formato seleccionado
        const primaryValue = selectedFormat === 'hex' ? colorObj.hex : colorObj.hsl;
        card.setAttribute('aria-label', `Copiar color ${primaryValue}`);

        card.innerHTML = `
            <div class="color-box" style="background-color: ${colorObj.hex};"></div>
            <div class="color-info">
                <span class="color-hex">${primaryValue}</span>
                <span class="color-hsl">Formato: ${selectedFormat.toUpperCase()}</span>
            </div>
        `;

        // Evento para copiar el código correspondiente al portapapeles al hacer clic
        card.addEventListener('click', () => {
            navigator.clipboard.writeText(primaryValue).then(() => {
                showToast();
            });
        });

        paletteContainer.appendChild(card);
    });
}

// Event Listeners principales
generateBtn.addEventListener('click', renderPalette);
paletteSizeSelect.addEventListener('change', renderPalette);
colorFormatSelect.addEventListener('change', renderPalette); // Actualiza al cambiar de formato

// Inicializar la aplicación al cargar la página
document.addEventListener('DOMContentLoaded', renderPalette);