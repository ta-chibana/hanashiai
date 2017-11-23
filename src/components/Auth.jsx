import React from 'react'

export default class Auth extends React.Component {
  componentDidMount() {
    this.props.onMount()
  }

  get isAuthorized() {
    return !!this.props.auth.uid
  }

  get authorizeArea() {
    return (
      <div>
        {this.isAuthorized ? this.signOut : this.signIn}
      </div>
    )
  }

  get signIn() {
    return (
      <button onClick={this.props.onClickSignIn}>SignIn</button>
    )
  }

  get signOut() {
    return (
      <div>
        {this.props.auth.displayName}
        <button onClick={this.props.onClickSignOut}>SignOut</button>
      </div>
    )
  }

  render() {
    const { auth } = this.props

    return (
      <div>
        {this.authorizeArea}
      </div>
    )
  }
}
