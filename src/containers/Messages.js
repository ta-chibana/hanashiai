import { connect } from 'react-redux'
import {
  subscribeMessages, unSubscribeMessages, writeMessageRequested
} from 'Actions/messages'
import { changeMessage } from 'Actions/form'
import Messages from 'Components/Messages'

const mapStateToProps = (state) => {
  return {
    user: state.auth,
    messages: state.messages,
    message: state.form.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (user, message) => {
      dispatch(writeMessageRequested(user, message))
    },
    onChange: (message) => {
      dispatch(changeMessage(message))
    }
  }
}

const mergeProps = (stateProps, dispatchProps) => {
  const { user, messages, message } = stateProps
  const onClick = () => {
    return dispatchProps.onClick(user, message)
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
