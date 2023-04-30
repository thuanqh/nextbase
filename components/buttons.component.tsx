"use client"

import { signIn, signOut } from "next-auth/react";
import Link from 'next/link';

export const LoginButton = () => {
  return (
    <button className="mr-2" onClick={() => signIn()}>
      Sign in
    </button>
  )
}

export const RegisterButton = () => {
  return (
    <Link href="/register" className="mr-2">
      Register
    </Link>
  )
}

export const LogoutButton = () => {
  return (
    <button className="mr-2" onClick={() => signOut()}>
      Sign out
    </button>
  )
}

export const ProfileButton = () => {
  return <Link href="/profile">Profile</Link>
}