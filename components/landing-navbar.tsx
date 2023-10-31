"use client"

import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { signIn, signOut, useSession } from "next-auth/react"
<<<<<<< HEAD
import { useRouter } from "next/navigation"
=======
>>>>>>> master

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
})

export const LandingNavbar = () => {
  const session = useSession()
<<<<<<< HEAD
  const router = useRouter()
=======

  console.log(session)
>>>>>>> master

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image fill alt="Logo" src="/chip.png" />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>AI-T</h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Button
          variant="outline"
          className="rounded-full"
<<<<<<< HEAD
          onClick={session && session.data ? () => router.push("/dashboard") : () => router.push("/sign-in")}
        >
          {session && session.data ? "Dashboard" : "Login"}
=======
          onClick={session && session.data ? () => signOut() : () => signIn()}
        >
          {session && session.data ? "Logout" : "Login"}
>>>>>>> master
        </Button>
      </div>
    </nav>
  )
}
