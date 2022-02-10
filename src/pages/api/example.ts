import { verifyIdToken } from "next-firebase-auth";
import initAuth from "../../firebase/initAuth";
import { withAuthUserTokenAPI } from "../../withAuthUserTokenAPI";

interface Success {
  favoriteColor: string;
}

interface Error {
  error: string;
}

type Data = Success | Error;

initAuth();

const handler = withAuthUserTokenAPI<Data>(async (req, res, user) => {
  let token = await user.getIdToken();
  if (!token) {
    return res
      .status(400)
      .json({ error: "Missing Authorization header value" });
  }

  let favoriteColor: string;

  // This "unauthenticated" token is just an demo of the
  // "SSR with no token" example.
  if (token === "unauthenticated") {
    favoriteColor = "unknown, because you called the API without an ID token";
  } else {
    try {
      await verifyIdToken(token);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
      return res.status(403).json({ error: "Not authorized" });
    }

    let colors = [
      "sea foam green",
      "light purple",
      "teal",
      "taupe",
      "dark grey",
    ];
    favoriteColor = colors[Math.floor(Math.random() * colors.length)];
  }

  return res.status(200).json({ favoriteColor });
});

export default handler;
