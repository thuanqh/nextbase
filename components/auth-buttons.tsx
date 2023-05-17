"use client"

import { cn } from "@/lib/utils";
import { signIn, signOut } from "next-auth/react";
import Link from 'next/link';
import { Button, buttonVariants } from "@/components/ui/button";

export const LoginButton = () => {
  return (
    <Button className="mr-2" onClick={() => signIn()}>
      Sign in
    </Button>
  )
}

export const RegisterButton = () => {
  return (
    <Link
      href="/register"
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "right-4 top-4 md:right-8 md:top-8",
      )}
    >
      Register
    </Link>
  )
}

export const LogoutButton = () => {
  return (
    <Button className="mr-2" onClick={() => signOut()}>
      Sign out
    </Button>
  )
}

export const ProfileButton = () => {
  return (
    <Link
      href="/profile"
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "right-4 top-4 md:right-8 md:top-8",
      )}
    >
      Profile
    </Link>
  )
}