document.addEventListener('DOMContentLoaded', () => {
    const paletteContainer = document.getElementById('palette-container');
    const generateBtn = document.getElementById('generate-btn');
    const savePaletteBtn = document.getElementById('save-palette-btn');
    const paletteSizeSelect = document.getElementById('palette-size');
    const colorFormatSelect = document.getElementById('color-format');
    const savedPalettesContainer = document.getElementById('saved-palettes-container');
    const toast = document.getElementById('toast');

    // Cargar paletas guardadas desde localStorage al iniciar
    let savedPalettes = JSON.parse(localStorage.getItem('savedPalettes')) || [];
    renderSavedPalettes();

    // Generar un color aleatorio en HEX
    function getRandomHex() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Generar un color aleatorio en HSL
    function getRandomHsl() {
        const h = Math.floor(Math.random() * 360);
        const s = Math.floor(Math.random() * 61) + 40; // 40% - 100%
        const l = Math.floor(Math.random() * 51) + 25; // 25% - 75%
        return `hsl(${h}, ${s}%, ${l}%)`;
    }

    // Función principal para generar paleta
    function generatePalette() {
        const size = parseInt(paletteSizeSelect.value);
        const format = colorFormatSelect.value;
        const existingCards = paletteContainer.children;

        // Si ya hay tarjetas, respetamos las que estén bloqueadas
        const currentColors = [];
        for (let i = 0; i < existingCards.length; i++) {
            const card = existingCards[i];
            if (card.classList.contains('locked')) {
                currentColors.push({
                    color: card.style.backgroundColor,
                    locked: true
                });
            } else {
                currentColors.push({
                    color: null,
                    locked: false
                });
            }
        }

        paletteContainer.innerHTML = '';

        for (let i = 0; i < size; i++) {
            let colorValue;
            let isLocked = false;

            // Si ya existía y estaba bloqueada, conservamos su color
            if (currentColors[i] && currentColors[i].locked) {
                colorValue = currentColors[i].color;
                isLocked = true;
            } else {
                colorValue = format === 'hex' ? getRandomHex() : getRandomHsl();
            }

            createColorCard(colorValue, isLocked);
        }
    }

    // Crear dinámicamente cada tarjeta de color con sus iconos
    function createColorCard(colorValue, isLocked = false) {
        const card = document.createElement('div');
        card.classList.add('color-card');
        if (isLocked) card.classList.add('locked');
        card.style.backgroundColor = colorValue;

        // Contenedor de iconos (Bloquear y Copiar)
        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('card-actions');

        // Botón de Bloqueo
        const lockBtn = document.createElement('button');
        lockBtn.classList.add('card-action-btn', 'lock-btn');
        lockBtn.innerHTML = `<i class="fa-solid ${isLocked ? 'fa-lock' : 'fa-lock-open'}"></i>`;
        lockBtn.title = "Bloquear / Desbloquear color";
        
        lockBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            card.classList.toggle('locked');
            const lockedNow = card.classList.contains('locked');
            lockBtn.innerHTML = `<i class="fa-solid ${lockedNow ? 'fa-lock' : 'fa-lock-open'}"></i>`;
        });

        // Botón de Copiar
        const copyBtn = document.createElement('button');
        copyBtn.classList.add('card-action-btn', 'copy-btn');
        copyBtn.innerHTML = `<i class="fa-solid fa-copy"></i>`;
        copyBtn.title = "Copiar color al portapapeles";

        copyBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            // Convertir color a formato texto legible si es necesario
            navigator.clipboard.writeText(colorValue).then(() => {
                showToast(`¡Copiado: ${colorValue}!`);
            });
        });

        actionsDiv.appendChild(lockBtn);
        actionsDiv.appendChild(copyBtn);

        // Información de texto del color
        const info = document.createElement('div');
        info.classList.add('color-info');
        info.textContent = colorValue;

        card.appendChild(actionsDiv);
        card.appendChild(info);

        // Permitir copiar también haciendo clic en la tarjeta entera
        card.addEventListener('click', () => {
            navigator.clipboard.writeText(colorValue).then(() => {
                showToast(`¡Copiado: ${colorValue}!`);
            });
        });

        paletteContainer.appendChild(card);
    }

    // Guardar la paleta actual en la barra lateral
    savePaletteBtn.addEventListener('click', () => {
        const cards = paletteContainer.children;
        if (cards.length === 0) return;

        const paletteColors = [];
        for (let card of cards) {
            paletteColors.push(card.style.backgroundColor);
        }

        savedPalettes.push(paletteColors);
        localStorage.setItem('savedPalettes', JSON.stringify(savedPalettes));
        renderSavedPalettes();
        showToast('¡Paleta guardada en la barra lateral!');
    });

    // Renderizar paletas guardadas en la barra lateral
    function renderSavedPalettes() {
        savedPalettesContainer.innerHTML = '';

        if (savedPalettes.length === 0) {
            savedPalettesContainer.innerHTML = '<p style="font-size: 0.8rem; opacity: 0.7;">No hay paletas guardadas.</p>';
            return;
        }

        savedPalettes.forEach((palette, index) => {
            const item = document.createElement('div');
            item.classList.add('saved-palette-item');

            const colorsPreview = document.createElement('div');
            colorsPreview.classList.add('saved-palette-colors');
            colorsPreview.title = "Haz clic para cargar esta paleta";

            palette.forEach(col => {
                const box = document.createElement('div');
                box.classList.add('mini-color-box');
                box.style.backgroundColor = col;
                colorsPreview.appendChild(box);
            });

            // Cargar la paleta guardada al hacer clic en la miniatura
            colorsPreview.addEventListener('click', () => {
                paletteContainer.innerHTML = '';
                palette.forEach(col => createColorCard(col, false));
                showToast('Paleta cargada');
            });

            // Botón para borrar la paleta guardada (Icono de papelera)
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-palette-btn');
            deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
            deleteBtn.title = "Eliminar paleta guardada";

            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                savedPalettes.splice(index, 1);
                localStorage.setItem('savedPalettes', JSON.stringify(savedPalettes));
                renderSavedPalettes();
                showToast('Paleta eliminada');
            });

            item.appendChild(colorsPreview);
            item.appendChild(deleteBtn);
            savedPalettesContainer.appendChild(item);
        });
    }

    // Mostrar notificación Toast
    function showToast(message) {
        toast.textContent = message;
        toast.classList.remove('hidden');
        toast.classList.add('show');

        clearTimeout(showToast.timeoutId);
        showToast.timeoutId = setTimeout(() => {
            toast.classList.remove('show');
            toast.classList.add('hidden');
        }, 2000);
    }

    // Event listeners
    generateBtn.addEventListener('click', generatePalette);

    // Generar la primera paleta automáticamente al cargar la página
    generatePalette();
});