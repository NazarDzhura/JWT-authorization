import React, {FC, useContext, useEffect} from 'react';
import {Login} from "./views/Login"
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {Switch, Route, Redirect, BrowserRouter, Link} from "react-router-dom";
import {HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import ProtectedRoute from "./components/ProtectedRoute";
import {Home} from "./views/Home";
import ButtonAppBar from "./components/ButtonAppBar";
import {Register} from "./views/Register";

const App: FC = () => {
  const {store} = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
  }, [])

  if (store.isLoading) {
    return <h1>Loading...</h1>
  }

  return (
      <>
          <BrowserRouter>
              {store.isAuth ? <ButtonAppBar /> : null}
              <Switch>
                  <Route path={LOGIN_ROUTE}>
                      {!store.isAuth ? <Login/> : <Redirect to={{pathname: HOME_ROUTE}}/>}
                  </Route>
                  <ProtectedRoute path={HOME_ROUTE} exact>
                      {store.isAuth ? <Home/> : <Redirect to={{pathname: LOGIN_ROUTE}}/>}
                  </ProtectedRoute>
                  <Route path={REGISTRATION_ROUTE}>
                      {!store.isAuth ? <Register/> : <Redirect to={{pathname: HOME_ROUTE}}/>}
                  </Route>
                  <Route>
                      <h1>404 Not Found</h1>
                  </Route>
              </Switch>
          </BrowserRouter>
      </>
  );
}

export default observer(App);