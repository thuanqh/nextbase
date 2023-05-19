/* 
// Client Session

"use client"

import { useSession } from "next-auth/react";
import { cache, use } from "react";
import { redirect } from "next/navigation";
import Image from "next/image";

type User = {
  id: number;
  name: string;
  email: string;
}

const getUsers = cache(() =>
  fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json())
)

export default function Profile() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin")
    },
  })

  if (status === "loading") {
    return <p>Loading...</p>
  }

  let users = use<User[]>(getUsers())
 */

/* import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation";
*/
import Image from "next/image";

type User = {
  id: number;
  name: string;
  email: string;
}

export default async function Profile() {
  /* const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/api/auth/signin")
  } */

  const users: User[] = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((res) => res.json())

  return (
    <main className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex gap-4">
        <div className="grid grid-cols-4 gap-5">
          {users.map((user) => (
            <div
              key={user.id}
              className="border border-sky-500 text-center"
            >
              <Image
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={user.name}
                height={180}
                width={180}
              />
              <h3>{user.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}