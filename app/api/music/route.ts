import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit"
import { checkSubscription } from "@/lib/subscription"
// import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"
import Replicate from "replicate"

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
})

export async function POST(request: Request) {
  try {
    // const { userId } = auth()
    const body = await request.json()
    const { prompt } = body
    // const freeTrial = await checkApiLimit()
    // const isUpgraded = await checkSubscription()

    // if (!userId) {
    //   return new NextResponse("Unauthorized", { status: 401 })
    // }

    if (!prompt) {
      return new NextResponse("prompt required", { status: 400 })
    }

    // if (!freeTrial && !isUpgraded) {
    //   return new NextResponse("Free trial has expired", { status: 403 })
    // }

    const response = await replicate.run(
      "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
      {
        input: {
          prompt_a: prompt,
        },
      }
    )

    // if (!isUpgraded) {
    //   await increaseApiLimit()
    // }

    return NextResponse.json(response)
  } catch (error) {
    console.log("[MUSIC_ERROR]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}
