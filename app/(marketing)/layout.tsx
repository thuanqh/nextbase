import { SiteHeader } from "@/components/site-header";
import React, { ReactNode } from "react";

interface MarketingLayoutProps {
  children: ReactNode
}

export default async function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <SiteHeader />
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}