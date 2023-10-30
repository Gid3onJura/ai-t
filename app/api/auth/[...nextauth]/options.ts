import prismadb from "@/lib/prismadb"
import type { NextAuthOptions, User, getServerSession } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email:",
          type: "email",
          placeholder: "your email",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your password",
        },
      },
      async authorize(credentials, request) {
        const response = await fetch("http://localhost:3000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        })

        const user = await response.json()

        if (user) {
          return user
        }

        return null
      },
    }),
  ],
  pages: {
    error: "/sign-in",
  },
}
