import prismadb from "@/lib/prismadb"
import type { NextAuthOptions, User, getServerSession } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import * as bcrypt from "bcryptjs"

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  adapter: PrismaAdapter(prismadb),
  secret: process.env.NEXTAUTH_SECRET,
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
        if (!credentials?.email || !credentials?.password) {
          return null
        }
        
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
        return null
      },
    }),
  ],
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
  pages: {
    error: "/sign-in",
  },
}
