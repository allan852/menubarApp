'use strict';

var _require = require('electron'),
    ipcRenderer = _require.ipcRenderer;

var React = require('react');
var ReactDom = require('react-dom');
// <button id="teminate">close</button>

function teminate(event) {
	console.log("temenate");
	var logElement = document.getElementById("log");
	logElement.html += "clicked ";
	ipcRenderer.send('terminate-app');
}

// first component 
function TeminateButton() {
	return React.createElement(
		'button',
		{ onClick: teminate },
		'Close'
	);
}

ReactDom.render(React.createElement(TeminateButton, null, null), document.getElementById('root'));
