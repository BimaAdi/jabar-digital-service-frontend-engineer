import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MyForm from './components/MyForm';
import SuccessPage from './components/SuccessPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MyForm />
        </Route>
        <Route path="/success">
          <SuccessPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
