import prismadb from "@/lib/prismadb"
import type { NextAuthOptions, User, getServerSession } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
<<<<<<< HEAD
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import * as bcrypt from "bcryptjs"
=======
>>>>>>> master

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
<<<<<<< HEAD
  pages: {
    signIn: "/sign-in",
  },
  adapter: PrismaAdapter(prismadb),
  secret: process.env.NEXTAUTH_SECRET,
=======
>>>>>>> master
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
<<<<<<< HEAD
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // const response = await fetch("/api/auth/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     email: credentials?.email,
        //     password: credentials?.password,
        //   }),
        // })
        const existingUser = await prismadb.user.findFirst({
          where: {
            email: credentials?.email,
          },
        })

        if (existingUser && (await bcrypt.compare(credentials.password, existingUser.password))) {
          const { password, ...user } = existingUser
          if (user) {
            return {
              id: `${user.id}`,
              username: user.username,
              email: user.email,
            }
          }
        }
=======
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

>>>>>>> master
        return null
      },
    }),
  ],
<<<<<<< HEAD
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          username: user.username,
        }
      }
      return token
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          username: token.username,
        },
      }
    },
=======
  pages: {
    error: "/sign-in",
>>>>>>> master
  },
}
