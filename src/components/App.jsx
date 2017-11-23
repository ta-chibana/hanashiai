import React from 'react'
import Auth from 'Containers/Auth'

export default (props) => {
  const authorize = (
    <Auth />
  )

  return (
    <div>
      {props.uid ? props.displayName : authorize}
    </div>
  )
}
