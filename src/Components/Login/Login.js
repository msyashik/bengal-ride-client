import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Login.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
} from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebase.config";
import { UserContext } from "../../App";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Login = () => {
  const { register, errors, handleSubmit } = useForm();
  const [loggedIn, setLoggedIn] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const user = result.user;
        const newUser = {
          email: user.email,
        };
        setLoggedIn(newUser);
        history.replace(from);
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const onSubmit = (data) => {
    //console.log(data);
    const { email, password } = data;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const newUser = {
          email: user.email,
        };
        setLoggedIn(newUser);
        history.replace(from);
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const fbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then((result) => {
        var user = result.user;
        const newUser = {
          email: user.email,
        };
        setLoggedIn(newUser);
        history.replace(from);
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="container">
        <h2>Sign in</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control mt-2"
                  placeholder="xyz@abc.com"
                  ref={register({
                    required: "*Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Give valid email",
                    },
                  })}
                />
              </div>
              <div style={{ color: "red", fontSize: "15px" }}>
                {errors.email && <p>{errors.email.message}</p>}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="password" className="mt-2">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-control mt-2"
                  placeholder="Password"
                  ref={register({
                    required: "*Password is required",
                    minLength: {
                      value: 6,
                      message: "*Minimum password length is 6",
                    },
                  })}
                />
              </div>
              <div style={{ color: "red", fontSize: "15px" }}>
                {errors.password && <p>{errors.password.message}</p>}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Button type="Submit" className="btn btn-success mt-2 w-50">
                Sign in
              </Button>
            </div>
          </div>
        </form>
        <div className="mt-2">
          <p>
            Want to create a new account? <Link to="/signup">Register</Link>
          </p>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <Button
              onClick={googleSignIn}
              type="Submit"
              className="btn btn-primary w-100"
            >
              Sign in using Google
            </Button>
          </div>
          <div className="col-md-6">
            <button
              onClick={fbSignIn}
              type="Submit"
              className="btn btn-danger w-100"
            >
              Sign in using Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
