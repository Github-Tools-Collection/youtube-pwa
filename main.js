const { app, BrowserWindow, session } = require('electron');

let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
        }
    });

    // Inject AdBlocker to remove YouTube ads
    session.defaultSession.webRequest.onBeforeRequest(
        { urls: ["*://*.doubleclick.net/*", "*://*.googlesyndication.com/*", "*://*.ads.youtube.com/*"] },
        (details, callback) => {
            callback({ cancel: true }); // Block ads
        }
    );

    mainWindow.loadURL("https://www.youtube.com");

    // Enable Background Play
    mainWindow.webContents.setAudioMuted(false);

    // Enhanced Picture-in-Picture (PiP) Mode
    mainWindow.webContents.executeJavaScript(`
        document.addEventListener("keydown", (event) => {
            if (event.code === "KeyP" && event.ctrlKey) {
                let video = document.querySelector("video");
                if (video && document.pictureInPictureEnabled) {
                    video.requestPictureInPicture();
                }
            }
        });

        document.addEventListener("dblclick", (event) => {
            let video = document.querySelector("video");
            if (video && document.pictureInPictureEnabled) {
                video.requestPictureInPicture();
            }
        });
    `);
});
