import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: '811544065923-kknkqq41dbjh9ch49agq183d0ivdc6dv.apps.googleusercontent.com',
      clientSecret: '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',
    }),
    // ...add more providers here
  ],
  secret: '707eba5ce05bb5286a06cb38d52a460b'
}

export default NextAuth(authOptions)