(function() {
    let css = `
        body, html { overflow: hidden !important; height: 100% !important; }
        #masthead-container, #guide-button, #player-container, .ytp-chrome-bottom, .ytp-chrome-top, #navigation-bar {
            display: none !important;
        }
        iframe, video { width: 100vw !important; height: 100vh !important; object-fit: cover !important; }
        nav, header, footer, .ytp-gradient-top, .ytp-gradient-bottom, .ytp-chrome-controls {
            display: none !important;
        }
    `;
    let style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    // Fullscreen Mode on Load
    function requestFullScreen() {
        let elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    }

    document.addEventListener("DOMContentLoaded", function() {
        setTimeout(requestFullScreen, 2000); // Ensure full-screen activates after load
    });

    console.log("🔥 YouTube Full-Screen Mode Activated!");
})();
