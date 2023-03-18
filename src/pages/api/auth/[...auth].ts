import { passportAuth } from "@blitzjs/auth"
import { api } from "src/blitz-server"
import db from "db"
import { Strategy as GithubStrategy } from "passport-github2"

export default api(
  passportAuth({
    successRedirectUrl: "/",
    errorRedirectUrl: "/",
    strategies: [
      {
        strategy: new GithubStrategy(
          {
            clientID: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
            scope: ["user:email"],
            callbackURL:
              process.env.NODE_ENV === "production"
                ? "https://example.com/api/auth/github/callback"
                : "http://localhost:3000/api/auth/github/callback",
          },
          async function (_token: any, _tokenSecret: any, profile: any, done: any) {
            const email = profile.emails && profile.emails[0]?.value
            if (!email) {
              // This can happen if you haven't enabled email access in your github app permissions
              return done(new Error("Github OAuth response doesn't have email."))
            }

            const user = await db.user.upsert({
              where: { email },
              create: {
                email,
                name: profile.username,
                // source: "github",
              },
              update: { email },
            })

            const publicData = {
              userId: user.id,
              source: "github",
            }
            done(undefined, { publicData })
          }
        ),
      },
    ],
  })
)
