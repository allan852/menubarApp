const EventEmitter = require('events')
const Database = require('nedb')
const menubar = require('menubar')
const { ipcMain, globalShortcut, dialog, clipboard } = require('electron')

let db = new Database()
let mb = menubar()
let clipboardIntervel = null
let clipboardEmitter = new EventEmitter()

function registerShortkey() {
	globalShortcut.register("CommandOrControl+Alt+K", () => {
		dialog.showMessageBox({
			type: 'info',
			message: 'Success!',
			detail: 'You pressed the registered blobal shortcut keybinding',
			buttons: ['OK']
		})
	})
}

function monitorClipboard() {
	let lastValue = clipboard.readText()
	function monitorChange() {
		let currentText = clipboard.readText()
		// console.log("monitor clipboard is changed")
		if (lastValue != currentText) {
			let _lastValue = lastValue
			lastValue = currentText
			clipboardEmitter.emit('clipboard:changed', currentText, _lastValue)
		}
	}

	clipboardIntervel = setInterval(monitorChange, 10);
}

mb.on('ready', () => {
	console.log('app is ready')
	// mb.showWindow()
	// mb.window.webContents.openDevTools()

	registerShortkey()
	monitorClipboard()
})

mb.on('after-show', () => {
	mb.window.webContents.openDevTools()
})

mb.on('will-quit', () => {
	globalShortcut.unregisterAll()
	if (clipboardIntervel) {
		clearInterval(clipboardIntervel)
	}
})

// linten for render
ipcMain.on('app:terminate', () => {
	mb.app.quit()
})

// clipboard changed
clipboardEmitter.on('clipboard:changed', (newValue, lastValue) => {
	console.log(`clipboard changed from ${lastValue} to ${newValue}`)
})
