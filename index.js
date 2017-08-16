const menubar = require('menubar')
const { ipcMain } = require('electron')

let mb = menubar()

mb.on('ready', () => {
	console.log('app is ready')
	// mb.showWindow()
	// mb.window.webContents.openDevTools()
})

mb.on('after-show', () => {
	mb.window.webContents.openDevTools()
})

ipcMain.on('terminate-app', () => {
	mb.app.quit()
})
