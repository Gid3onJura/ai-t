import prismadb from "@/lib/prismadb"
import * as bcrypt from "bcryptjs"
import { NextResponse } from "next/server"

interface RequestBody {
  email: string
  password: string
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json()

  const existingUser = await prismadb.user.findFirst({
    where: {
      email: body.email,
    },
  })

  if (existingUser && (await bcrypt.compare(body.password, existingUser.password))) {
    const { password, ...user } = existingUser
    return NextResponse.json({
      user,
    })
  }
  return NextResponse.json({
    message: "Unauthorized",
    status: 401,
  })
}
