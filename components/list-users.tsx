"use client";

import Image from "next/image";
import { trpc } from "@/utils/trpc";

export default function ListUsers() {
  const { data: users, isLoading, isFetching } = trpc.getUsers.useQuery()

  return (
    <div className="grid grid-cols-4 gap-5">
      {users?.map((user) => (
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
  )
}
