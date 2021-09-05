import logo from './logo.svg';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Zocket from './Component/zocket/Zocket';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Zocket} exact></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
