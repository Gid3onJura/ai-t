import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "your username",
        },
        password: {
          label: "Username:",
          type: "password",
          placeholder: "your password",
        },
      },
      async authorize(credentials) {
        const user = { id: "1", username: "Max", password: "1234", email: "test@test.de" }
        return user
      },
    }),
  ],
}
