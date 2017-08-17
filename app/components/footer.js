const {ipcRenderer} = window.require('electron')
const React = require('react')
import { Button, Row, Col } from 'antd'

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  teminateApp = (e) => {
    // console.log("temenate")
  	ipcRenderer.send('terminate-app')
  }

  render() {
    return (
      <Row type="flex" justify="space-between">
        <Col span={12}><Button><i className="fa fa-cog"></i></Button></Col>
        <Col span={12} style={{textAlign: 'right'}}><Button onClick={ this.teminateApp }><i className="fa fa-sign-out"></i></Button></Col>
      </Row>
    )
  }
}

export default Footer
