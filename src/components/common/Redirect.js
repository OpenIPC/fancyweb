import { Component } from 'preact'
import { route } from 'preact-router'

export class Redirect extends Component {
  constructor(props) {
    super()
    this.props = props
    console.log(this.props, 'redirect')
  }
  componentDidMount() {
    route(this.props.to, true)
  }

  render() {
    return null
  }
}
