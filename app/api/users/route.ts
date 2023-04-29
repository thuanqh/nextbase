import { NextResponse } from "next/server"

import { prisma } from "@/lib/prisma"

export async function GET(request: Request) {
  const users = await prisma.user.findMany()
  return NextResponse.json(users)
}

export async function POST(request: Request) {
  try {
    const json = await request.json()

    const user = await prisma.user.create({
      data: json,
    })

    return new NextResponse(JSON.stringify(user), { status: 201 })
  } catch (error: any) {
    if (error.code === "P2002") {
      return new NextResponse("User with email already exists", {
        status: 409,
      })
    }
    return new NextResponse(error.message, { status: 500 })
  }
}
