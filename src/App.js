import './App.css';
import Main from './components/Main/Main.js';
import { Redirect, Route, Switch } from 'react-router-dom';
import FourOhFour from './components/FourOhFour/FourOhFour.js';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/:r/:g/:b" component={Main} />
        <Route exact path="/">
          <Redirect to="/20/70/30" />
        </Route>
        <Route path="*">
          <FourOhFour />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
