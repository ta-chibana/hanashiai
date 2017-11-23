import React from 'react'

export default class Auth extends React.Component {
  componentDidMount() {
    this.props.onMount()
  }

  render() {
    return (
      <div>
        <button onClick={this.props.onClickLogin}>Login</button>
      </div>
    )
  }
}
