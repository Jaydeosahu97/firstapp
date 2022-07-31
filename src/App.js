import { Link, Route, Router, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home';
import UserList from './pages/UserList';
// import 
function App() {
  return (
    <Router>
      <Link to="/home">Home</Link>
      <Link to="/userlist"></Link>
      <Switch>
        <Route path='/home'><Home/></Route>
        <Route path='/userlist'><UserList/></Route>
      </Switch>
    </Router>
  );
}

export default App;
