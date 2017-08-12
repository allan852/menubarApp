const {ipcRenderer} = require('electron')
const React = require('react')
const ReactDom = require('react-dom')
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
	React.createElement(TeminateButton, null, null),
	document.getElementById('root')
)