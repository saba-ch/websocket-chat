import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Notification from 'components/Notification'

import JoinRoom from 'pages/JoinRoom'
import Room from 'pages/Room'
import NotFound from 'pages/NotFound'

import NotAuthRoute from './NotAuthRoute'
import AuthRoute from './AuthRoute'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <NotAuthRoute path='/' exact>
          <JoinRoom />
        </NotAuthRoute>
        <AuthRoute path='/room/:roomId'>
          <Room />
        </AuthRoute>
        <Route path='*' exact>
          <NotFound />
        </Route>
      </Switch>
      <Notification />
    </BrowserRouter>
  )
}

export default Router
