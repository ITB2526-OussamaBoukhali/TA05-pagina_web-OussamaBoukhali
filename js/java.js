document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. FUNCIONALIDAD: EFECTO MÁQUINA DE ESCRIBIR
    // ==========================================
    const titleElement = document.querySelector('.intro-box h2');

    if(titleElement) {
        const originalText = titleElement.innerText;
        titleElement.innerText = '';

        let i = 0;
        const speed = 100;

        function typeWriter() {
            if (i < originalText.length) {
                titleElement.innerHTML += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        typeWriter();
    }

    // ==========================================
    // 2. FUNCIONALIDAD: BUSCADOR EN TIEMPO REAL
    // ==========================================
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.cat-card');

    if(searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            const term = e.target.value.toLowerCase();

            cards.forEach(card => {
                const listItems = card.querySelectorAll('li');
                let hasMatch = false;

                listItems.forEach(item => {
                    const text = item.textContent.toLowerCase();
                    if(text.includes(term)) {
                        item.style.display = 'block';
                        hasMatch = true;
                    } else {
                        item.style.display = 'none';
                    }
                });

                if(hasMatch) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // ==========================================
    // 3. FUNCIONALIDAD: BOTÓN VOLVER ARRIBA
    // ==========================================
    const scrollBtn = document.getElementById("scrollTopBtn");

    if(scrollBtn) {
        window.onscroll = function() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                scrollBtn.style.display = "block";
            } else {
                scrollBtn.style.display = "none";
            }
        };

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ==========================================
    // 4. NUEVA FUNCIONALIDAD: VISOR DE IMÁGENES (LIGHTBOX)
    // ==========================================

    // 1. Crear el HTML del modal dinámicamente (para no ensuciar tu HTML)
    const modalHTML = `
        <div id="lightbox-modal">
            <span id="lightbox-close">&times;</span>
            <img id="lightbox-img" src="">
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // 2. Seleccionar elementos creados
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');

    // 3. Buscar imágenes que queremos ampliar
    // Buscamos las imágenes dentro de 'big-image-frame' o 'project-hero-img'
    const images = document.querySelectorAll('.big-image-frame img, .project-hero-img');

    images.forEach(img => {
        // Añadimos clase para cursor de lupa
        img.classList.add('zoomable-img');

        // Al hacer clic en la imagen
        img.addEventListener('click', function() {
            modal.style.display = "flex"; // Mostrar modal
            modalImg.src = this.src;      // Poner la misma foto
        });
    });

    // 4. Función para cerrar
    function closeModal() {
        modal.style.display = "none";
    }

    // Cerrar al pulsar la X
    closeBtn.addEventListener('click', closeModal);

    // Cerrar al pulsar fuera de la imagen (en el fondo negro)
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});
