// Import FirebaseAuth and firebase.
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import React, { useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { firebaseClientInitConfig } from "../firebase/initAuth";

firebase.initializeApp(firebaseClientInitConfig);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

function SignInScreen() {
  let [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    let unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  }
  return (
    <div>
      <h1>My App</h1>
      <p>
        Welcome {firebase.auth().currentUser.displayName}! You are now
        signed-in!
      </p>
      <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
    </div>
  );
}

export default SignInScreen;
