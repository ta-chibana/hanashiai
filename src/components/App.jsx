import React from 'react'
import Auth from 'Containers/Auth'
import Messages from 'Containers/Messages'

export default (props) => {
  return (
    <div>
      <Auth />
      {props.uid ? <Messages /> : null}
    </div>
  )
}
