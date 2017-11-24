import { connect } from 'react-redux'
import {
  subscribeMessages, unSubscribeMessages, writeMessageRequested
} from 'Actions/messages'
import { changeMessage } from 'Actions/form'
import Messages from 'Components/Messages'

const mapStateToProps = (state) => {
  return {
    userName: state.auth.displayName,
    messages: state.messages,
    message: state.form.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (userName, message) => {
      dispatch(writeMessageRequested(userName, message))
    },
    onChange: (message) => {
      dispatch(changeMessage(message))
    }
  }
}

const mergeProps = (stateProps, dispatchProps) => {
  const { messages, message } = stateProps
  const onClick = () => {
    return dispatchProps.onClick(stateProps.userName, message)
  }

  return {
    messages: messages,
    message: message,
    onClick,
    onChange: dispatchProps.onChange
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps, mergeProps
)(Messages)

