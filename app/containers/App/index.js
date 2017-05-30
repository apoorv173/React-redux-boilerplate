import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../../components/Header';
import Home from '../../routes/Home';
import ContactUs from '../../routes/ContactUs';

const App = () => (
  <main>
    <Header />
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/contactus" component={ContactUs} />
      <Redirect to="/home" />
    </Switch>
  </main>
);

export default App;
