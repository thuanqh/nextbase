"use client"

import { cn } from "@/lib/utils"
import { signIn } from "next-auth/react"
import { ChangeEvent, useState } from "react"

export const RegisterForm = () => {
  let [loading, setLoading] = useState(false)
  let [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  })

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      })

      setLoading(false)
      if (!res.ok) {
        alert((await res.json()).message)
        return
      }

      signIn(undefined, { callbackUrl: "/" })
    } catch (error: any) {
      setLoading(false)
      console.log(error)
      alert(error.message)
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormValues({ ...formValues, [name]: value })
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-[500px] flex-col gap-y-4"
    >
      <label htmlFor="name">Name</label>
      <input
        required
        type="text"
        name="name"
        value={formValues.name}
        onChange={handleChange}
        className="p-4"
      />
      <label htmlFor="email">Email</label>
      <input
        required
        type="email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
        className="p-4"
      />
      <label htmlFor="password">Password</label>
      <input
        required
        type="password"
        name="password"
        value={formValues.password}
        onChange={handleChange}
        className="p-4"
      />
      <label htmlFor="role">Role</label>
      <input
        required
        type="text"
        name="role"
        value={formValues.role}
        onChange={handleChange}
        className="p-4"
      />
      <button
        className={cn(`${loading ? "bg-gray-300" : "bg-sky-500"}`, "cursor-pointer p-4 text-white")}
        disabled={loading}
      >
        {loading ? "loading..." : "Register"}
      </button>
    </form>
  )
}