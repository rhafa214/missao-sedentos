document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MENU LATERAL ---
    const menuOverlay = document.getElementById('menu-overlay');
    const btnOpen = document.getElementById('open-menu');
    const btnClose = document.getElementById('close-menu');
    const menuLinks = document.querySelectorAll('.menu-link');

    if (btnOpen && menuOverlay) {
        btnOpen.addEventListener('click', () => {
            menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        btnClose.addEventListener('click', () => {
            menuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
    }

    // --- 2. CARROSSEL DNJ ---
    const carrossel = document.getElementById('carrossel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (carrossel && nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            carrossel.scrollLeft += carrossel.offsetWidth;
        });
        prevBtn.addEventListener('click', () => {
            carrossel.scrollLeft -= carrossel.offsetWidth;
        });
    }

    // --- 3. LIGHTBOX (EXPANDIR FOTO) ---
    const modalFoto = document.getElementById('modal-foto');
    const imgModal = document.getElementById('img-modal');
    const btnFecharLightbox = document.getElementById('fechar-lightbox');
    const fotosCarrossel = document.querySelectorAll('.foto-slide img');

    if (modalFoto && imgModal) {
        fotosCarrossel.forEach(foto => {
            foto.addEventListener('click', () => {
                modalFoto.style.display = 'flex';
                imgModal.src = foto.src;
                document.body.style.overflow = 'hidden';
            });
        });

        btnFecharLightbox.addEventListener('click', () => {
            modalFoto.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        modalFoto.addEventListener('click', (e) => {
            if (e.target === modalFoto) {
                modalFoto.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // --- 4. BARRA DE PROGRESSO ANIMADA ---
    const barraProgresso = document.querySelector('.progresso-atual');
    const textoPorcentagem = document.querySelector('.porcentagem');

    if (barraProgresso && textoPorcentagem) {
        const animarBarra = (entradas, observador) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    const alvo = entrada.target.getAttribute('data-width');
                    entrada.target.style.width = alvo + '%';
                    
                    let contagem = 0;
                    const intervalo = setInterval(() => {
                        if (contagem >= alvo) {
                            clearInterval(intervalo);
                        } else {
                            contagem++;
                            textoPorcentagem.innerText = contagem + '%';
                        }
                    }, 20);
                    observador.unobserve(entrada.target);
                }
            });
        };

        const observador = new IntersectionObserver(animarBarra, { threshold: 0.5 });
        observador.observe(barraProgresso);
    }
});