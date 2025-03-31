(function () {
    // Verifica se o overlay já existe para evitar duplicação
    if (!document.getElementById('loader')) {
        const overlay = document.createElement('div');
        overlay.id = 'loader';
        overlay.innerHTML = `
            <div class="spinner"></div>
        `;
        overlay.style.cssText = `
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #000;
            z-index: 9999;
        `;

        const style = document.createElement('style');
        style.innerHTML = `
            .spinner {
                width: 60px;
                height: 60px;
                border: 6px solid transparent;
                border-top: 6px solid #00ff88;
                border-radius: 50%;
                animation: spin 1s linear infinite;
            }

            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;

        document.head.appendChild(style);
        document.body.appendChild(overlay);
    }

    function hideLoader() {
        const overlay = document.getElementById('loader');
        if (overlay) {
            overlay.style.display = 'none';
        }
    }

    window.addEventListener('load', hideLoader);
})();
