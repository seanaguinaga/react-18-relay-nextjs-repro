import { init } from "next-firebase-auth";

const TWELVE_DAYS_IN_MS = 12 * 60 * 60 * 24 * 1000;

export const firebaseClientInitConfig = {
  apiKey: "AIzaSyBkf14yKnRuRBN7zTMQN86XIYkK_A3yhqY",
  authDomain: "development-ruum.firebaseapp.com",
  databaseURL: "https://development-ruum-default-rtdb.firebaseio.com",
  projectId: "development-ruum",
  storageBucket: "development-ruum.appspot.com",
  messagingSenderId: "784399769068",
  appId: "1:784399769068:web:70cf7aec091ed96c72f4c9",
  measurementId: "G-B9YQ82WJVN",
};

// export const firebaseClientInitConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };

const initAuth = () => {
  let firebasePrivateKey = process.env.FIREBASE_PRIVATE_KEY;
  init({
    debug: false,
    authPageURL: "/authentication",
    appPageURL: "/home",
    loginAPIEndpoint: "/api/login",
    logoutAPIEndpoint: "api/logout",
    firebaseAdminInitConfig: {
      credential: {
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        // https://stackoverflow.com/a/41044630/1332513
        privateKey: process.env.FIREBASE_PRIVATE_KEY
          ? firebasePrivateKey.replace(/\\n/g, "\n")
          : undefined,
      },
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    },
    firebaseClientInitConfig,
    cookies: {
      name: "DashReel",
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: TWELVE_DAYS_IN_MS,
      overwrite: true,
      path: "/",
      // @TODO: Need to figure out domain for publish
      // domain: process.env.NODE_ENV === "production" ? "ruum.page" : "localhost",
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      signed: true,
    },
    onVerifyTokenError: (err) => {
      console.error(err);
    },
    onTokenRefreshError: (err) => {
      console.error(err);
    },
  });
};

export default initAuth;
