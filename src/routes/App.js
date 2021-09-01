import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import Player from '../containers/Player';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/player/:id' component={Player} />
        <Route exact path='/' component={Home} />

        <Route path='/404' component={NotFound} />
        <Route path='*'>
          <Redirect to='/404' />
        </Route>
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
