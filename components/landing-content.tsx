"use client"

import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import TypewriterComponent from "typewriter-effect"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
})

const testimonials = [
  {
    name: "bot-1",
    avatar: "B",
    title: "Clever Bot",
    description: "This is the best application I've used!",
  },
  {
    name: "bot-2",
    avatar: "B",
    title: "Clever Bot",
    description: "This is the best application I've used!",
  },
  {
    name: "bot-3",
    avatar: "B",
    title: "Clever Bot",
    description: "This is the best application I've used!",
  },
  {
    name: "bot-4",
    avatar: "B",
    title: "Clever Bot",
    description: "This is the best application I've used!",
  },
  {
    name: "bot-5",
    avatar: "B",
    title: "Clever Bot",
    description: "This is the best application I've used!",
  },
  {
    name: "bot-6",
    avatar: "B",
    title: "Clever Bot",
    description: "This is the best application I've used!",
  },
  {
    name: "bot-7",
    avatar: "B",
    title: "Clever Bot",
    description: "This is the best application I've used!",
  },
  {
    name: "bot-8",
    avatar: "B",
    title: "Clever Bot",
    description: "This is the best application I've used!",
  },
]

export const LandingContent = () => {
  const { isSignedIn } = useAuth()

  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">{item.description}</CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
