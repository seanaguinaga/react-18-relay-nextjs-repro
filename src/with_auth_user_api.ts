import { NextApiRequest, NextApiResponse } from "next";
import { AuthAction, AuthUser, withAuthUserTokenSSR } from "next-firebase-auth";

const checkServerSideAuth =
  typeof window !== "undefined"
    ? null // "withAuthUserTokenSSR" can only be called server-side.
    : withAuthUserTokenSSR({
        whenAuthed: AuthAction.RENDER,
        whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
        authPageURL: "401",
      })(async ({ AuthUser }) => ({ AuthUser, props: {} }));

export function withAuthUserTokenAPI<Data>(
  handler: (
    req: NextApiRequest,
    res: NextApiResponse<Data>,
    user: AuthUser
  ) => Promise<void>
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    //@ts-expect-error fine
    const { AuthUser, redirect } = await checkServerSideAuth({ req, res });
    if (redirect) {
      res.status(401).json({ ok: false, code: "unauthorized" });
      return;
    }
    return handler(req, res, AuthUser);
  };
}
