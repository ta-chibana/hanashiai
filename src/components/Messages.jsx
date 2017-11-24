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

  changeMessage(e) {
    this.props.onChange(e.target.value)
  }

  render() {
    const { message, onClick } = this.props

    return (
      <div>
        <h2>Messages</h2>
        {this.messageList}
        <div>
          <input type="textarea" value={message} onChange={this.changeMessage.bind(this)} />
          <button onClick={onClick}>submit</button>
        </div>
      </div>
    )
  }
}
