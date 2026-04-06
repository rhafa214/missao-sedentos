document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. LÓGICA DO MENU LATERAL ---
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

    // --- 2. CARROSSEL EVENTOS (DNJ) ---
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

    // --- 3. LIGHTBOX (EXPANDIR FOTOS) ---
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
            carrossel.scrollLeft += carrossel.offsetWidth / 2;
        });
        prevBtn.addEventListener('click', () => {
            carrossel.scrollLeft -= carrossel.offsetWidth / 2;
        });
    }

    // --- 3. LIGHTBOX (AMPLIAR FOTOS) ---
    const modal = document.getElementById('modal-foto');
    const imgModal = document.getElementById('img-modal');
    const btnFechar = document.getElementById('fechar-lightbox');
    const fotos = document.querySelectorAll('.foto-slide img');

    if (modal && imgModal) {
        fotos.forEach(foto => {
            foto.addEventListener('click', () => {
                imgModal.src = foto.src;
                modal.style.display = 'flex';
                setTimeout(() => modal.classList.add('aberto'), 10);
                document.body.style.overflow = 'hidden';
            });
        });

        const fecharTudo = () => {
            modal.classList.remove('aberto');
            setTimeout(() => modal.style.display = 'none', 300);
            document.body.style.overflow = 'auto';
        };

        btnFechar.addEventListener('click', fecharTudo);
        modal.addEventListener('click', (e) => { if(e.target === modal) fecharTudo(); });
    }

    // --- 4. ANIMAÇÕES DE ENTRADA (SCROLL REVEAL) ---
    // Adicione a classe 'revelar' nas tags do HTML que você quer que animem
    const secoesParaAnimar = document.querySelectorAll('section, .card-musica-pro, .card-agenda');
    secoesParaAnimar.forEach(s => s.classList.add('revelar'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('ativo');
            }
        });
    }, { threshold: 0.1 });

    secoesParaAnimar.forEach(secao => observer.observe(secao));

    // --- 5. BARRA DE PROGRESSO (Página Patrocínio) ---
    const barra = document.querySelector('.progresso-atual');
    const texto = document.querySelector('.porcentagem');

    if (barra && texto) {
        const barraObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const alvo = entry.target.getAttribute('data-width');
                    entry.target.style.width = alvo + '%';
                    
                    let atual = 0;
                    const contador = setInterval(() => {
                        if (atual >= alvo) {
                            texto.innerText = alvo + '%';
                            clearInterval(contador);
                        } else {
                            atual++;
                            texto.innerText = atual + '%';
                        }
                    }, 25);
                    barraObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        barraObserver.observe(barra);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const URL_PLANILHA = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRzZveDQvFHn857898t5alXAoKjdDuqRn6jvBsCiZ8X1QIGF3yIb7ebtVws8gkyHaSd-2ORtrbstc8-/pub?output=csv";

    const listaAgenda = document.getElementById('lista-agenda');
    const btnCarregar = document.getElementById('btn-carregar-agenda');
    
    if (!listaAgenda || !btnCarregar) return;

    let eventosFuturos = [];
    let itensVisiveis = 3;

    fetch(URL_PLANILHA)
        .then(res => res.text())
        .then(data => {
            const linhas = data.split('\n').slice(1); 
            const hoje = new Date();
            hoje.setHours(0, 0, 0, 0);

            eventosFuturos = [];

            linhas.forEach(linha => {
                const col = linha.split(',');
                if (col.length < 6) return; // Garante que a linha tem todas as colunas

                const dataEvento = new Date(col[0].trim() + "T00:00:00");

                if (dataEvento >= hoje) {
                    eventosFuturos.push({
                        dataStr: col[0].trim(),
                        titulo: col[1].trim(),
                        local: col[2].trim(),
                        cidade: col[3].trim(),
                        dia: col[4].trim(),
                        mes: col[5].trim()
                    });
                }
            });

            // Ordenar por data
            eventosFuturos.sort((a, b) => new Date(a.dataStr) - new Date(b.dataStr));

            renderizarAgenda();
        })
        .catch(err => {
            listaAgenda.innerHTML = "<p>Erro ao carregar agenda.</p>";
            console.error(err);
        });

    function renderizarAgenda() {
        listaAgenda.innerHTML = ""; 
        
        if (eventosFuturos.length === 0) {
            listaAgenda.innerHTML = "<p style='color:#aaa; padding: 20px;'>Nenhuma missão agendada no momento.</p>";
            btnCarregar.style.display = 'none';
            return;
        }

        eventosFuturos.forEach((ev, index) => {
            const card = document.createElement('div');
            card.className = 'card-evento';
            
            // Lógica de visibilidade: apenas os primeiros 'itensVisiveis' recebem a classe 'show' e display flex
            if (index < itensVisiveis) {
                card.classList.add('show');
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
            
            card.innerHTML = `
                <div class="data-evento" style="border-right: 2px solid var(--dourado); padding-right: 30px;">
                    <span class="dia" style="font-family: var(--fonte-impacto); font-size: 2rem; color: var(--dourado); display: block;">${ev.dia}</span>
                    <span class="mes" style="font-weight: bold; color: #fff;">${ev.mes}</span>
                </div>
                <div class="info-evento" style="flex: 1; text-align: left; padding: 0 30px;">
                    <h3 style="font-size: 1.1rem; color: #fff; margin-bottom: 5px;">${ev.titulo}</h3>
                    <p style="font-size: 0.8rem; color: #aaa;"><i class="fas fa-church"></i> ${ev.local}</p>
                    <p style="font-size: 0.8rem; color: #aaa;"><i class="fas fa-map-marker-alt"></i> ${ev.cidade}</p>
                </div>
                <div class="status-evento"><span class="badge-agenda" style="border: 1px solid var(--dourado); color: var(--dourado); padding: 5px 12px; border-radius: 50px; font-size: 0.7rem;">CONFIRMADO</span></div>
            `;
            listaAgenda.appendChild(card);
        });

        // Atualiza o botão "Ver Mais"
        if (eventosFuturos.length > 3) {
            btnCarregar.style.display = 'inline-block';
            btnCarregar.innerText = itensVisiveis >= eventosFuturos.length ? "VER MENOS" : "VER MAIS MISSÕES";
        } else {
            btnCarregar.style.display = 'none';
        }
    }

    btnCarregar.addEventListener('click', () => {
        if (itensVisiveis < eventosFuturos.length) {
            itensVisiveis += 3; // Mostra mais 3
        } else {
            itensVisiveis = 3; // Reseta para 3
            window.scrollTo({ top: document.getElementById('agenda').offsetTop - 50, behavior: 'smooth' });
        }
        renderizarAgenda();
    });
});