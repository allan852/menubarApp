import React from 'react'
import ReactDom from 'react-dom'
// import App from './app.js'
require('antd/dist/antd.css')

let hello = <h1>Hello React</h1>
let Hello = (
  <h1>Hello World</h1>
)

// function component
function Welcome(props) {
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
console.log(<Welcome/>)

// extracting components, state, lifecycle hooks
class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({date: new Date()})
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
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  )
}

function App() {
  return (
    <div>
      <Clock/>
      <Clock/>
      <Clock/>
      <Clock/>
    </div>
  )
}

//Conditional Rendering
function UserGreeting(props) {
  return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <UserGreeting/>
  } else {
    return <GuestGreeting/>
  }
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  )
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}

class LoginControl extends React.Component {
  state = {
    isLoggedIn: false
  }
  constructor(props) {
    super(props)
  }

  handleLoginClick = () => {
    this.setState({isLoggedIn: true})
  }

  handleLogoutClick = () => {
    this.setState({isLoggedIn: false})
  }

  render() {
    const isLoggedIn = this.state.idLoggedIn
    let button = null
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick}/>
    } else {
      button = <LoginButton onClick={this.handleLoginClick}/>
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn}/> {button}
      </div>
    )
  }
}

// Inline if with logical && operator
function MailBox(props) {
  const unreadMessages = props.unreadMessages
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && <h2>
        You have {unreadMessages.length}
        unread message.
      </h2>}
    </div>
  )
}

const message = ['React', 'Re: React', 'Re:Re: React']

//Inline if-else with conditional operator

//List and Keys
const numbers = [1, 2, 3, 4, 5, ]
const doubled = numbers.map((number) => number * 2)
console.log(doubled)



function NumberList(props) {
  const numbers = props.numbers
  const listItems = numbers.map((number) => <li key={number.toString()}>{number}</li>)
  return (
    <ul>{listItems}</ul>
  )
}

// Forms
// controlled components: input textarea  select
// input textarea  value for display
class NameForm extends React.Component {
  state = {
    value: ''
  }
  constructor(props) {
    super(props)
  }

  handleChage = (event) => {
    this.setState({value: event.target.value.toUpperCase()})
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChage} />
          <textarea type="text" value={this.state.value} onChange={this.handleChage} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

// select tag
class FlavorForm extends React.Component {
  state = {
    value: 'cocount'
  }
  constructor(props) {
    super(props)
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  handleSubmit = (event) => {
    alert('Your favorite flavor is:' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite La Croix flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}



ReactDom.render(
  <FlavorForm />,
  document.getElementById('root')
)
