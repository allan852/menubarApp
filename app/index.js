const {ipcRenderer} = window.require('electron')
const React = require('react')
const ReactDom = require('react-dom')
import App from './app.js'
require('antd/dist/antd.css')
// <button id="teminate">close</button>

console.log(111, App)
function teminate() {
	console.log("temenate")
	ipcRenderer.send('terminate-app')
}

// first component
function TeminateButton(props) {
	return <button onClick={ props.teminate }>Close</button>
}

ReactDom.render(
	<App />,
	document.getElementById('root')
)
