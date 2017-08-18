import React from 'react'
import ReactDom from 'react-dom'
// import App from './app.js'
require('antd/dist/antd.css')

let hello = <h1>Hello React</h1>
let Hello = (
	<h1>Hello World</h1>
)

// function component
function Welcome(props){
	return <h1>Hello {props.name}</h1>
}

// class component
class WelcomeClass extends React.Component {
	render() {
		return <h1>Hello {this.props.name}</h1>
	}
}

function App() {
	return (
		<div>
			<Welcome name="Sara" />
			<Welcome name="Cahal" />
			<Welcome name="Edite" />
		</div>
	)
}

console.log(hello)
console.log(Hello)
console.log(Welcome)
console.log(<Welcome />)
console.log(App())
console.log(<App />)

ReactDom.render(
	<App />,
	document.getElementById('root')
)
