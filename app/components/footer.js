const {ipcRenderer} = window.require('electron')
const React = require('react')
import { Button } from 'antd'

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  teminateApp = (e) => {
    console.log("temenate")
  	ipcRenderer.send('terminate-app')
  }

  render() {
    return (
      <div>
        <Button icon="search" onClick={ this.teminateApp }>Search</Button>
      </div>
    )
  }
}

export default Footer
