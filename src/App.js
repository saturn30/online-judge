import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Main from './Page/Main'
import MyPage from './Page/MyPage'
import Problem from './Page/Problem'
import ProblemList from './Page/ProblemList'
import Login from './Page/Login'
import Join from './Page/Join'
import ProblemCreate from './Page/ProblemCreate'

import './lib/myBulma.scss'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Main}></Route>
      <Route path='/mypage' component={MyPage}></Route>
      <Route path='/problem/:id' component={Problem}></Route>
      <Route path='/problemlist' component={ProblemList}></Route>
      <Route path='/login' component={Login}></Route>
      <Route path='/join' component={Join}></Route>
      <Route path='/problemcreate' component={ProblemCreate}></Route>
    </Switch>
  );
}

export default App;
