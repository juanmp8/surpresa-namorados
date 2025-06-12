// --- LÓGICA DO CARROSSEL DE FOTOS (SWIPER) ---
const swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


// --- LÓGICA DA REALIDADE AUMENTADA (MODEL-VIEWER) ---
const arButton = document.querySelector('#ar-button');
const modelViewer = document.querySelector('#flower-viewer');

arButton.addEventListener('click', () => {
    // Ao clicar no botão, ativa o modo AR do model-viewer "invisível"
    modelViewer.activateAR();
});