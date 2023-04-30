import { NextResponse } from "next/server"
import { hash } from "bcryptjs"

import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  try {
    const { name, email, password, role } = (await req.json()) as {
      name: string
      email: string
      password: string
      role: string
    }
    const hashed_password = await hash(password, 12)

    const user = await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        password: hashed_password,
        role,
      },
    })

    return NextResponse.json({
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
    })
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 }
    )
  }
}
