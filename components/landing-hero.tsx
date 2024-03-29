"use client"

import Link from "next/link"
// import { useAuth } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import TypewriterComponent from "typewriter-effect"

export const LandingHero = () => {
  // const { isSignedIn } = useAuth()

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>AI-T for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-stone-600 via-grimson-500 to-red-700">
          <TypewriterComponent
            options={{
              strings: ["Chatbot.", "Music Generation.", "Photo Generation.", "Code Generation.", "Video Generation."],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">Create content using AI 10x faster</div>
      <div>
        {/* <Link href={isSignedIn ? "/dashboard" : "/sign-up"}> */}
        <Link href={"/sign-up"}>
          <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Start Generation for Free
          </Button>
        </Link>
      </div>
    </div>
  )
}
