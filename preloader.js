(function() {
    // Verifica se o overlay já existe para evitar duplicação
    if (!document.getElementById('loader')) {
        const overlay = document.createElement('div');
        overlay.id = 'loader';
        overlay.style.cssText = `
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.7);
            z-index: 999;
        `;
        document.body.appendChild(overlay);
    }

    // Verifica se o contêiner Lottie já existe para evitar duplicação
    if (!document.getElementById('lottieContainer')) {
        const lottieContainer = document.createElement('div');
        lottieContainer.id = 'lottieContainer';
        lottieContainer.style.cssText = `
            width: 100%;
            height: 100%;
            max-width: 500px;
            max-height: 500px;
            display: none;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        `;
        document.body.appendChild(lottieContainer);
    }

    function hideOverlay() {
        const overlay = document.getElementById('loader');
        const lottieContainer = document.getElementById('lottieContainer');

        if (overlay && lottieContainer) {
            overlay.style.display = 'none';
            lottieContainer.style.display = 'block';

            // Verifica se a animação já está carregada para evitar duplicação
            if (!lottieContainer.dataset.loaded) {
                lottie.loadAnimation({
                    container: lottieContainer,
                    renderer: 'svg', // ou 'canvas' se preferir
                    loop: true,
                    autoplay: true,
                    path: 'https://rafawga.github.io/preloaderJSLottie/certify_animation.json',
                });
                lottieContainer.dataset.loaded = true;
            }
        }
    }

    document.addEventListener('DOMContentLoaded', hideOverlay);
    window.addEventListener('load', hideOverlay);
})();
