import prismadb from "@/lib/prismadb"
import * as bcrypt from "bcryptjs"
import { NextResponse } from "next/server"

interface RequestBody {
  email: string
  password: string
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json()

  const user = await prismadb.user.findFirst({
    where: {
      email: body.email,
    },
  })

  if (user) {
    return NextResponse.json({
      message: "User still exists",
      status: 400,
    })
  }

  const newUser = await prismadb.user.create({
    data: {
      username: body.email,
      email: body.email,
      password: await bcrypt.hash(body.password, 5),
    },
  })

  const { password, ...userWithoutPassword } = newUser

  return NextResponse.json({
    user: userWithoutPassword,
    message: "User created",
    status: 201,
  })
}
