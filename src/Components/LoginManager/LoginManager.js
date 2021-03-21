import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebase.config";

export const initializeLoginFramework = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
};

export const googleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      const user = result.user;
      const newUser = {
        email: user.email,
      };
      return [newUser, true];
    })
    .catch((error) => {
      return ["This is from error", false];
    });
};

export const fbSignIn = () => {
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(fbProvider)
    .then((result) => {
      var user = result.user;
      const newUser = {
        email: user.email,
      };
      return [newUser, true];
    })
    .catch((error) => {
      return ["This is from error", false];
    });
};

export const signInWithEmailAndPassword = (props) => {
  const { email, password } = props;
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const newUser = {
        email: user.email,
      };
      return [newUser, true];
    })
    .catch((error) => {
      return ["This is from error", false];
    });
};

const LoginManager = () => {
  return <div></div>;
};

export default LoginManager;
