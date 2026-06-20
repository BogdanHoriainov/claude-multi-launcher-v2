{
  "name": "claude-multi-launcher",
  "version": "1.0.0",
  "description": "Лаунчер с 5 независимыми, постоянно залогиненными окнами Claude",
  "main": "main.js",
  "author": "you",
  "license": "MIT",
  "scripts": {
    "start": "electron .",
    "dist": "electron-builder --win"
  },
  "devDependencies": {
    "electron": "^31.0.0",
    "electron-builder": "^24.13.3"
  },
  "build": {
    "appId": "com.local.claudemulti",
    "productName": "Claude Multi",
    "win": {
      "target": "nsis"
    },
    "nsis": {
      "oneClick": true,
      "perMachine": false,
      "createDesktopShortcut": true
    },
    "files": [
      "main.js",
      "preload-overlay.js",
      "preload-host.js",
      "background.html",
      "renderer.js"
    ]
  }
}
