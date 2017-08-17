import React from 'react'
import {Layout, Button, Radio, Row, Col} from 'antd'
import fontAwesome from 'font-awesome/css/font-awesome.css'
import AppHeader from './components/header'
import AppFooter from './components/footer'

const {Header, Content, Footer, Sider} = Layout
const contentStyle = {
	height: "calc(100vh - 76px)",
	maxHeight: "calc(100vh - 76px)",
  overflow:"auto"
}

class App extends React.Component {
	state = {
		type: 'text'
	}

	constructor(props) {
		super(props)
	}

	handleChangeType = (e) => {
		this.setState({type: e.target.value })
	}

	render() {
		return (
			<div style={{padding: '10px'}}>
				<div>
					<AppHeader handleChangeType={this.handleChangeType} currentValue={this.state.type} />
				</div>
				<div style={ contentStyle }>
					<Row>{this.state.type}</Row>
				</div>
				<div>
					<AppFooter />
				</div>
			</div>
		)
	}
}

export default App
