const React = require('react')
import { Row, Col, Radio } from 'antd'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Row type="flex" justify="center" gutter={8}>
        <Col>
          <Radio.Group onChange={this.props.handleChangeType}>
            <Radio.Button value="text">文本</Radio.Button>
            <Radio.Button value="html">HTML</Radio.Button>
            <Radio.Button value="img">图片</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
    )
  }
}

export default Header
