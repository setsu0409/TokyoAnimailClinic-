import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createHashHistory } from "history";

// 配置路由路径
import Login from '../page/Login/Login';
import Home from '../page/Home/Home';
import Enroll from '../page/UserAccount/Enroll/Enroll.jsx';
import ChangePassword from '../page/UserAccount/ChangePassword/ChangePassword.jsx'
// 设置路由类型
import Detail from '../page/Home/HospitalDetail.jsx'
const history = createHashHistory();

class RouterConfig extends React.Component{
  render() {
    return(
      <Router history={history}>
        <Switch>
          <Route path="/" exact render={() => (
            <Redirect to="/home" />
          )} />
          <Route path="/login" component={Login} />
          <Route path="/enroll" component={Enroll} />
          <Route path="/home" component={Home} />
          <Route path="/changePassword" component={ChangePassword}></Route>
          <Route path="/detail" component={Detail}></Route>
        </Switch>
      </Router>
    )
  }
}

export default RouterConfig;