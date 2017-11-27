import React from 'react'

export default class Messages extends React.Component {
  get messageList() {
    const { messages } = this.props

    if (!messages) {
      return
    }

    const listStyle = {
      display: 'flex',
      marginBottom: '10px',
      paddingBottom: '10px',
      borderBottom: '1px solid #000000'
    }

    const list = Object.keys(messages).map((key) => (
      <div key={key} style={listStyle}>
        {this.thumbnail(messages[key])}
        <div>
          <div style={{ lineHeight: '35px' }}>{`${messages[key].userName}`}</div>
          <div>{messages[key].message}</div>
        </div>
      </div>
    ))

    const style = {
      borderTop: '1px solid #000000',
      paddingTop: '10px'
    }

    return (
      <div style={style}>
        {list}
      </div>
    )
  }

  thumbnail(message) {
    const { photoURL } = message
    const style = {
      width: '35px',
      height: '35px',
      marginRight: '10px'
    }

    return (
      <img src={photoURL} style={style} />
    )
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
          <input
            type="textarea"
            value={message}
            onChange={this.changeMessage.bind(this)}
            placeholder="100文字まで"
          />
          <button onClick={onClick}>submit</button>
        </div>
      </div>
    )
  }
}
