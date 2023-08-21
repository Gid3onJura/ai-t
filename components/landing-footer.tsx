"use client"

import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
})

export const LandingFooter = () => {
  return (
    <div className="p-4 bg-transparent flex items-center justify-between">
      <div className="font-extralight absolute bottom-1 flex flex-row justify-start p-2 m-2 bg-slate-300">
        <div className="flex flex-col">
          <Link href="https://www.flaticon.com/de/kostenlose-icons/kunstliche-intelligenz">
            Künstliche intelligenz Icons erstellt von Triangle Squad - Flaticon
          </Link>
          <Link href="https://www.flaticon.com/de/kostenlose-icons/nichts-gefunden">
            Empty Icons erstellt von Freepik - Flaticon
          </Link>
          <Link href="https://www.flaticon.com/free-icons/refresh">Refresh icons created by Dave Gandy - Flaticon</Link>
        </div>
      </div>
    </div>
  )
}
