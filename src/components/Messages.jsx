import React from 'react'

export default class Messages extends React.Component {
  get messageList() {
    const { messages } = this.props

    return Object.keys(messages).map((key) => (
      <div key={key}>
        <span>{`${messages[key].userName}: `}</span>
        <span>{messages[key].message}</span>
      </div>
    ))
  }

  render() {
    return (
      <div>
        <h2>Messages</h2>
        {this.messageList}
      </div>
    )
  }
}
