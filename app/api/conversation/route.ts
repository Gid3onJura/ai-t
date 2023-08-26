// import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"
import { Configuration, OpenAIApi } from "openai"

import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit"
import { checkSubscription } from "@/lib/subscription"

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

export async function POST(request: Request) {
  try {
    // const { userId } = auth()
    const body = await request.json()
    const { messages } = body
    // const freeTrial = await checkApiLimit()
    // const isUpgraded = await checkSubscription()

    // if (!userId) {
    //   return new NextResponse("Unauthorized", { status: 401 })
    // }

    if (!configuration.apiKey) {
      return new NextResponse("OpenAI-Key missing", { status: 500 })
    }

    if (!messages) {
      return new NextResponse("prompt required", { status: 400 })
    }

    // if (!freeTrial && !isUpgraded) {
    //   return new NextResponse("Free trial has expired", { status: 403 })
    // }

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages,
    })

    // if (!isUpgraded) {
    //   await increaseApiLimit()
    // }

    return NextResponse.json(response.data.choices[0].message)
  } catch (error) {
    console.log("[CONVERSATION_ERROR]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}
