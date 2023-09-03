import prismadb from "@/lib/prismadb"
import type { NextAuthOptions, User, getServerSession } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

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
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null
        }
        const dbUser = await prismadb.user.findFirst({
          where: {
            email: credentials?.email,
          },
        })

        if (dbUser && dbUser.password === credentials?.password) {
          return dbUser
        }

        return null
      },
    }),
  ],
}
