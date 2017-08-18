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

console.log(hello)
console.log(Hello)
console.log(Welcome)
console.log(<Welcome />)

// extracting components, state, lifecycle hooks
class Clock extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			date: new Date()
		}
	}
	componentDidMount(){
		this.timerID = setInterval(() => this.tick(), 1000)
	}

	componentWillUnmount() {
		clearInterval(this.timerID)
	}

	tick() {
		this.setState({
			date: new Date()
		})
	}

	render() {
		return (
			<div>
				<h1>Hello, world!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		)
	}
}

// handle events
// React events are named using camelCase
// With JSX you pass a function as the event handler, rather than a string
function ActionLink() {
	function handleClick(e) {
		e.preventDefault()
		console.log('The link was clicked')
	}

	return (
		<a href="#" onClick={ handleClick }>
			Click me
		</a>
	)
}


function App() {
	return (
		<div>
			<Clock />
			<Clock />
			<Clock />
			<Clock />
		</div>
	)
}

//Conditional Rendering


ReactDom.render(
	<App />,
	document.getElementById('root')
)
