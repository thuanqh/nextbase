"use client";

import { User } from "@prisma/client";
import { cache, use } from "react";
import Image from "next/image";

const getUsers = cache(() =>
  fetch("http://localhost:3000/api/users").then((res) => res.json())
)

export default function ListUsers() {
  let users = use<User[]>(getUsers())

  return (
    <div>
      {users.map((user) => (
        <div
          key={user.id}
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
  )
}
