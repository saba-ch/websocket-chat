import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import JoinRoom from 'pages/JoinRoom'
import Room from 'pages/Room'

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
      </Switch>
    </BrowserRouter>
  )
}

export default Router
