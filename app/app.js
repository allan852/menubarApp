const {ipcRenderer} = window.require('electron')
const React = require('react')
const ReactDom = require('react-dom')
require('spectre.css')
// <button id="teminate">close</button>

function teminate(event) {
	console.log("temenate")
	let logElement = document.getElementById("log")
	logElement.html += "clicked "
	ipcRenderer.send('terminate-app')
}

// first component
function TeminateButton() {
	return <button onClick={teminate}>Close</button>
}

ReactDom.render(
	<TeminateButton />,
	document.getElementById('root')
)
