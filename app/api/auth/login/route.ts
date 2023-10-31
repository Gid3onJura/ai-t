import prismadb from "@/lib/prismadb"
import * as bcrypt from "bcryptjs"

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

  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...userWithoutPassword } = user

    return new Response(JSON.stringify(userWithoutPassword))
  }
  return new Response(JSON.stringify(null))
}
