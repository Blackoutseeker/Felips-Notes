const { BrowserWindow, app, ipcMain } = require('electron')
const { resolve, join } = require('path')
const isDev = require('electron-is-dev')

if (isDev) {
  require('electron-reloader')(module)
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    show: false,
    width: 800,
    height: 500,
    backgroundColor: '#121212',
    minHeight: 250,
    minWidth: 450,
    frame: false,
    title: "Felip's Notes",
    icon: `${resolve(__dirname, 'assets', 'Icon.png')}`,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false
    }
  })

  const appUrl = isDev
    ? 'http://localhost:3000'
    : join(__dirname, './build/index.html')

  mainWindow.loadURL(appUrl)
  mainWindow.on('ready-to-show', mainWindow.show)
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// handle window actions
ipcMain.handle('minimize-window', () => {
  BrowserWindow.getFocusedWindow().minimize()
})

ipcMain.handle('resize-window', () => {
  const isWindowMaximized = BrowserWindow.getFocusedWindow().isMaximized()
  isWindowMaximized
    ? BrowserWindow.getFocusedWindow().unmaximize()
    : BrowserWindow.getFocusedWindow().maximize()
})

ipcMain.handle('close-window', () => {
  BrowserWindow.getFocusedWindow().close()
})
