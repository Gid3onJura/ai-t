import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit"
import { checkSubscription } from "@/lib/subscription"
// import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"
import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

export async function POST(request: Request) {
  try {
    // const { userId } = auth()
    const body = await request.json()
    const { prompt, amout = 1, resolution = "512x512" } = body
    // const freeTrial = await checkApiLimit()
    // const isUpgraded = await checkSubscription()

    // if (!userId) {
    //   return new NextResponse("Unauthorized", { status: 401 })
    // }

    if (!configuration.apiKey) {
      return new NextResponse("OpenAI-Key missing", { status: 500 })
    }

    if (!prompt) {
      return new NextResponse("prompt required", { status: 400 })
    }

    if (!amout) {
      return new NextResponse("amout required", { status: 400 })
    }

    if (!resolution) {
      return new NextResponse("resolution required", { status: 400 })
    }

    // if (!freeTrial && !isUpgraded) {
    //   return new NextResponse("Free trial has expired", { status: 403 })
    // }

    const response = await openai.createImage({
      prompt,
      n: parseInt(amout, 10),
      size: resolution,
    })

    // if (!isUpgraded) {
    //   await increaseApiLimit()
    // }

    return NextResponse.json(response.data.data)
  } catch (error) {
    console.log("[IMAGE_ERROR]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}
