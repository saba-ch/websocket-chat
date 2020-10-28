import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import { userSelector } from 'state/user/userSelectors'

const NotAuthRoute = ({ path, children, exact }) => {
  const user = useSelector(userSelector)

  if (user.id) return <Redirect to={`/room/${user.roomId}`} />
  return (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  )
}

export default NotAuthRoute
