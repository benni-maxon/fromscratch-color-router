import './App.css';
import Main from './components/Main/Main.js';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/:r/:g/:b" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
