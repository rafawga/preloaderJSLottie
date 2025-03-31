(function () {
    // Cria o overlay com fundo preto e Lottie centralizado
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

    function hideLoader() {
        const overlay = document.getElementById('loader');
        if (overlay) {
            overlay.remove(); // remove tudo quando o app estiver carregado
        }
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

    // Mostra animação o quanto antes
    document.addEventListener('DOMContentLoaded', showLottie);

    // Remove tudo quando o app estiver totalmente carregado
    window.addEventListener('load', hideLoader);
})();
