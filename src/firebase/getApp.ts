import { getApp, getApps, initializeApp } from "firebase/app";
import { firebaseClientInitConfig } from "./initAuth";

const getFirebaseApp = () => {
  if (getApps().length < 1) {
    return initializeApp(firebaseClientInitConfig);
    // Initialize other firebase products here
  } else {
    return getApp();
  }
};

export default getFirebaseApp;
