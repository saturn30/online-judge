import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Main from './Page/Main'
import MyPage from './Page/MyPage'
import Problem from './Page/Problem'
import Workbook from './Page/Workbook'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Main}></Route>
      <Route path='/mypage' component={MyPage}></Route>
      <Route path='/problem' component={Problem}></Route>
      <Route path='/workbook' component={Workbook}></Route>
    </Switch>
  );
}

export default App;
