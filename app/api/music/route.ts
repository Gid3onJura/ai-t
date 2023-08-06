import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"
import Replicate from "replicate"

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
})

export async function POST(request: Request) {
  try {
    const { userId } = auth()
    const body = await request.json()
    const { prompt } = body

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    if (!prompt) {
      return new NextResponse("prompt required", { status: 400 })
    }

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages,
    })

    return NextResponse.json(response.data.choices[0].message)
  } catch (error) {
    console.log("[CONVERSATION_ERROR]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}
