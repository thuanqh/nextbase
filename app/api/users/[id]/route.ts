import { NextResponse } from "next/server"

import { prisma } from "@/lib/prisma"

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  })

  if (!user) {
    return new NextResponse("No user with ID found", { status: 404 })
  }

  return NextResponse.json(user)
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id
  let json = await request.json()

  const update_user = await prisma.user.update({
    where: { id },
    data: json,
  })

  if (!update_user) {
    return new NextResponse("No user with ID found", { status: 404 })
  }

  return NextResponse.json(update_user)
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id
    await prisma.user.delete({
      where: { id },
    })

    return new NextResponse(null, { status: 204 })
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 })
  }
}
