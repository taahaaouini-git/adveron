import React from "react"
import { ThemeToggle } from "@/components/theme-toggle"

export function PublicLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="min-h-svh bg-background">
      <header className="flex h-16 items-center justify-between px-6 border-b">
        <div className="font-bold text-xl text-primary">Adveron</div>
        <ThemeToggle />
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default PublicLayout
