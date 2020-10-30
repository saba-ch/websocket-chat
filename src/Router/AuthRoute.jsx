import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import userSelectors from 'state/user/userSelectors'

const AuthRoute = ({ path, children, exact }) => {
  const user = useSelector(userSelectors.userSelector)

  if(!user.id) return <Redirect to='/' />
  return (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  )
}

export default AuthRoute
