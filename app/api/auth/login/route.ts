import prismadb from "@/lib/prismadb"
import * as bcrypt from "bcryptjs"
<<<<<<< HEAD
import { NextResponse } from "next/server"
=======
>>>>>>> master

interface RequestBody {
  email: string
  password: string
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json()

<<<<<<< HEAD
  const existingUser = await prismadb.user.findFirst({
=======
  const user = await prismadb.user.findFirst({
>>>>>>> master
    where: {
      email: body.email,
    },
  })

<<<<<<< HEAD
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
=======
  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...userWithoutPassword } = user

    return new Response(JSON.stringify(userWithoutPassword))
  }
  return new Response(JSON.stringify(null))
>>>>>>> master
}
