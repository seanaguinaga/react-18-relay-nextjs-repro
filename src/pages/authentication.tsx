import { AuthAction, withAuthUser } from "next-firebase-auth";
import React from "react";
import FirebaseAuth from "../components/FirebaseAuth";
import {} from "./_app";

const styles = {
  content: {
    padding: `8px 32px`,
  },
  textContainer: {
    display: "flex",
    justifyContent: "center",
    margin: 16,
  },
};

const Authentication = () => (
  <div className="ion-page">
    <ion-content>
      <div style={styles.content}>
        <h3>Sign in</h3>
        <div style={styles.textContainer}>
          <p>
            This auth page is <b>static</b>. It will redirect on the client side
            if the user is already authenticated.
          </p>
        </div>
        <div>
          <FirebaseAuth />
        </div>
      </div>
    </ion-content>
  </div>
);

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
  whenUnauthedAfterInit: AuthAction.RENDER,
})(Authentication);
