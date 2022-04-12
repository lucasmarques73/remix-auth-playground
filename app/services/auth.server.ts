import { Authenticator } from "remix-auth";
import { Auth0Strategy } from "remix-auth-auth0";
import { createCookieSessionStorage, json } from "remix";
import type { Auth0Profile } from "remix-auth-auth0";
import {
  AUTH0_CALLBACK_URL,
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
  AUTH0_DOMAIN,
  SECRETS,
} from "~/constants/index.server";

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_remix_session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: [SECRETS],
    secure: process.env.NODE_ENV === "production",
  },
});

export const auth = new Authenticator<Auth0Profile>(sessionStorage);

export interface AuthProfile {
  name: string;
  email: string;
  avatar: string;
}

export type AuthLoaderData = { profile: AuthProfile };

export const isAuthenticated = async (request: globalThis.Request) => {
  const auth0Profile = await auth.isAuthenticated(request, {
    failureRedirect: "/",
  });

  const profile = {
    name: auth0Profile._json.nickname,
    email: auth0Profile.emails[0].value,
    avatar: auth0Profile.photos[0].value,
  };

  console.log(JSON.stringify({ profile }, null, 2));
  return json<AuthLoaderData>({ profile });
};

const auth0Strategy = new Auth0Strategy(
  {
    callbackURL: AUTH0_CALLBACK_URL,
    clientID: AUTH0_CLIENT_ID,
    clientSecret: AUTH0_CLIENT_SECRET,
    domain: AUTH0_DOMAIN,
  },
  async ({ profile }) => {
    //
    // Use the returned information to process or write to the DB.
    //

    return profile;
  }
);

auth.use(auth0Strategy);

export const { getSession, commitSession, destroySession } = sessionStorage;
