import { connect } from 'react-redux'
import {
  subscribeMessages, unSubscribeMessages
} from 'Actions/messages'
import Messages from 'Components/Messages'

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps)(Messages)

