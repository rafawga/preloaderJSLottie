(function () {
    // Cria o overlay com fundo preto e animação centralizada
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

    // Marcar o tempo de início do loader
    const startTime = Date.now();

    function hideLoader() {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = 1000 - elapsedTime;

        // Garante no mínimo 1 segundo de exibição
        setTimeout(() => {
            const overlay = document.getElementById('loader');
            if (overlay) {
                overlay.remove();
            }
        }, remainingTime > 0 ? remainingTime : 0);
    }

    document.addEventListener('DOMContentLoaded', showLottie);
    window.addEventListener('load', hideLoader);
})();
