import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";
import SignUp from "./Components/SignUp/SignUp";
import NoMatch from "./Components/NoMatch/NoMatch";
import DestinationSearch from "./Components/DestinationSearch/DestinationSearch";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState({
    email: "",
  });
  return (
    <UserContext.Provider value={[loggedIn, setLoggedIn]}>
      <h3>Email: {loggedIn.email}</h3>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <PrivateRoute path="/destination/:transportType">
            <DestinationSearch></DestinationSearch>
          </PrivateRoute>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
