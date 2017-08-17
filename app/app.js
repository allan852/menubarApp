const React = require('react')
import {Layout, Button, Radio, Row, Col} from 'antd'
const {Header, Content, Footer, Sider} = Layout

import AppFooter from './components/footer'

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
					<Row type="flex" justify="center" gutter={8}>
						<Col>
							<Radio.Group onChange={this.handleChangeType}>
								<Radio.Button value="text">文本</Radio.Button>
								<Radio.Button value="html">HTML</Radio.Button>
								<Radio.Button value="img">图片</Radio.Button>
							</Radio.Group>
						</Col>
					</Row>
				</div>
				<div style={ contentStyle }>
					<Row>{this.state.type}</Row>
				</div>
				<div>
					<Row>
						<Col>
							<AppFooter />
						</Col>
					</Row>
				</div>
			</div>
		)
	}
}

export default App
