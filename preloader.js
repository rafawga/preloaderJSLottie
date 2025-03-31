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
            background-color: black;
            z-index: 9999;
        `;

        // Cria o contêiner Lottie dentro do overlay
        const lottieContainer = document.createElement('div');
        lottieContainer.id = 'lottieContainer';
        lottieContainer.style.cssText = `
            width: 100%;
            height: 100%;
            max-width: 500px;
            max-height: 500px;
        `;

        overlay.appendChild(lottieContainer);
        document.body.appendChild(overlay);
    }

    function showLottie() {
        const lottieContainer = document.getElementById('lottieContainer');

        if (lottieContainer && !lottieContainer.dataset.loaded) {
            lottie.loadAnimation({
                container: lottieContainer,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: 'https://rafawga.github.io/preloaderJSLottie/certify_animation.json',
            });
            lottieContainer.dataset.loaded = true;
        }
    }

    document.addEventListener('DOMContentLoaded', showLottie);
    window.addEventListener('load', showLottie);
})();
