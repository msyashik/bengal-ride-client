import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";
import SignUp from "./Components/SignUp/SignUp";
import NoMatch from "./Components/NoMatch/NoMatch";
import Admin from "./Components/Admin/Admin";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Checkout from "./Components/Checkout/Checkout";
import Orders from "./Components/Orders/Orders";

export const UserContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState({
    displayName: "",
    email: "",
  });
  return (
    <UserContext.Provider
      value={{
        logInUser: [loggedIn, setLoggedIn],
      }}
    >
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
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <PrivateRoute path="/order/:id">
            <Checkout></Checkout>
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
