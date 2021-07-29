import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is home page
      </Route>
      <Route exact path="/starred">
        This is starred
      </Route>

      <Route>Page NOT FOUND ERROR 404</Route>
    </Switch>
  );
}

export default App;
