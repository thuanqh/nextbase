"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { registerUserSchema } from "@/lib/validations/auth";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface RegisterUserFormProps extends React.HtmlHTMLAttributes<HTMLDivElement> { }

type FormData = z.infer<typeof registerUserSchema>

export const RegisterForm = ({ className, ...props }: RegisterUserFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(registerUserSchema)
  })
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data: FormData) => {
    setLoading(true)

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(data),
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
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid gap-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              required
              type="text"
              id="name"
              {...register("name")}
            />
            {errors?.name && <p className="px-1 text-xs text-red-600">{errors.name.message}</p>}
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              required
              type="email"
              id="email"
              {...register("email")}
            />
            {errors?.email && <p className="px-1 text-xs text-red-600">{errors.email.message}</p>}
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              required
              type="password"
              id="password"
              {...register("password")}
            />
            {errors?.password && <p className="px-1 text-xs text-red-600">{errors.password.message}</p>}
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="role">Role</Label>
            <Input
              type="text"
              id="role"
              {...register("role")}
            />
            {errors?.role && <p className="px-1 text-xs text-red-600">{errors.role.message}</p>}
          </div>
          <button
            className={cn(buttonVariants())}
            disabled={loading}
          >
            {loading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Register an Account
          </button>
        </div>
      </form>
    </div>
  )
}