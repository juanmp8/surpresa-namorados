// Inicializa o Swiper (carrossel)
const swiper = new Swiper('.swiper-container', {
    // Efeito do slide (pode ser 'slide', 'fade', 'cube', 'coverflow', 'flip')
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

    // Ativa o loop para as fotos ficarem passando continuamente
    loop: true,

    // Adiciona a paginação (as bolinhas)
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});