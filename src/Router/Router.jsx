import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import JoinRoom from 'pages/JoinRoom'
import Room from 'pages/Room'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <JoinRoom />
        </Route>
        <Route path='room/:roomId'>
          <Room />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
