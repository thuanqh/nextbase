import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import ListUsers from "@/components/list-users.component"
import ListUser from "./ListUser"
import { LoginButton, LogoutButton, ProfileButton, RegisterButton } from "@/components/buttons.component"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route"
import { User } from "@/components/user.component"

export default async function IndexPage() {
  const session = await getServerSession(authOptions)

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>
      <div className="flex gap-4">

        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ size: "lg" })}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          GitHub
        </Link>
      </div>
      <div className="flex gap-4">
        <ListUsers />
      </div>
      <div className="flex gap-4">
        <ListUser />
      </div>
      <div className="flex h-[70vh] items-center justify-center">
        <div>
          <LoginButton />
          <RegisterButton />
          <LogoutButton />
          <ProfileButton />

          <h1>Server Session</h1>
          <pre>{JSON.stringify(session)}</pre>

          <User />
        </div>
      </div>
    </section>
  )
}
