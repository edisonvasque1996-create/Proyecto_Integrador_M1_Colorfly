const generateBtn = document.getElementById('generate-btn');
const paletteSizeSelect = document.getElementById('palette-size');
const colorFormatSelect = document.getElementById('color-format');
const paletteContainer = document.getElementById('palette-container');
const paletteBackdrop = document.getElementById('palette-backdrop');
const toast = document.getElementById('toast');

function getRandomHex() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function hexToHsl(hex) {
    let r = parseInt(hex.slice(1, 3), 16) / 255;
    let g = parseInt(hex.slice(3, 5), 16) / 255;
    let b = parseInt(hex.slice(5, 7), 16) / 255;

    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
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

function generatePaletteArray(count) {
    const palette = [];
    for (let i = 0; i < count; i++) {
        const hex = getRandomHex();
        const hsl = hexToHsl(hex);
        palette.push({ hex, hsl });
    }
    return palette;
}

function showToast() {
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

function renderPalette() {
    const size = parseInt(paletteSizeSelect.value, 10);
    const selectedFormat = colorFormatSelect.value;
    const colorDataArray = generatePaletteArray(size);

    paletteContainer.innerHTML = '';

    // NUEVO: Degradado dinámico mucho más vivo y brillante en el fondo
    const hexColors = colorDataArray.map(c => c.hex);
    const firstColor = hexColors[0];
    const middleColor = hexColors[Math.floor(hexColors.length / 2)];
    const lastColor = hexColors[hexColors.length - 1];

    const dynamicGradient = `linear-gradient(135deg, ${firstColor}55, ${middleColor}44, ${lastColor}55)`;
    paletteBackdrop.style.setProperty('--dynamic-gradient', dynamicGradient);

    colorDataArray.forEach(colorObj => {
        const card = document.createElement('div');
        card.className = 'color-card';
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        
        const primaryValue = selectedFormat === 'hex' ? colorObj.hex : colorObj.hsl;
        card.setAttribute('aria-label', `Copiar color ${primaryValue}`);

        card.innerHTML = `
            <div class="color-box" style="background-color: ${colorObj.hex};"></div>
            <div class="color-info">
                <span class="color-hex">${primaryValue}</span>
                <span class="color-hsl">${selectedFormat.toUpperCase()}</span>
            </div>
        `;

        card.addEventListener('click', () => {
            navigator.clipboard.writeText(primaryValue).then(() => {
                showToast();
            });
        });

        paletteContainer.appendChild(card);
    });
}

generateBtn.addEventListener('click', renderPalette);
paletteSizeSelect.addEventListener('change', renderPalette);
colorFormatSelect.addEventListener('change', renderPalette);

document.addEventListener('DOMContentLoaded', renderPalette);