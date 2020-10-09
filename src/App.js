import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Admin from './Components/Admin/Admin';
import AllEvents from './Components/AllEvents/AllEvents';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
export const userContext = createContext();
function App() {
  const [users, setUsers] = useState({
    name: '',
    email: '',
    img: ''
  })
  const [events, setEvents] = useState([]);
  return (
    <userContext.Provider value={{ allUsers: [users, setUsers], allEvents: [events, setEvents] }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/register/:id">
            <Register></Register>
          </PrivateRoute>
          <PrivateRoute path="/allEvents">
            <AllEvents></AllEvents>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
