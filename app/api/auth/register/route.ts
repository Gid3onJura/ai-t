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

  const user = await prismadb.user.findFirst({
    where: {
      email: body.email,
    },
  })

  if (user) {
<<<<<<< HEAD
    return NextResponse.json({
      message: "User still exists",
      status: 400,
    })
=======
    return new Response(
      JSON.stringify({
        status: 400,
        message: "User still exists",
      })
    )
>>>>>>> master
  }

  const newUser = await prismadb.user.create({
    data: {
      username: body.email,
      email: body.email,
      password: await bcrypt.hash(body.password, 5),
    },
  })

<<<<<<< HEAD
  const { password, ...userWithoutPassword } = newUser

  return NextResponse.json({
    user: userWithoutPassword,
    message: "User created",
    status: 201,
  })
=======
  return new Response(
    JSON.stringify({
      status: 201,
      message: "User created",
    })
  )

  // if (user && (await bcrypt.compare(body.password, user.password))) {
  //   const { password, ...userWithoutPassword } = user

  //   return new Response(JSON.stringify(userWithoutPassword))
  // }
  // return new Response(JSON.stringify(null))
>>>>>>> master
}
