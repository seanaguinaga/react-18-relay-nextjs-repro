import { AuthUser, verifyIdToken } from "next-firebase-auth";
import initAuth from "../../firebase/initAuth";
import { withAuthUserTokenAPI } from "../../withAuthUserTokenAPI";

interface Success {
  user: AuthUser;
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

  try {
    let user = await verifyIdToken(token);
    return res.status(200).json({ user });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return res.status(403).json({ error: "Not authorized" });
  }
});

export default handler;
