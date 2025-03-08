"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Github, Menu, Moon, Sun } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"

interface HeaderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any
  isDarkMode: boolean
  toggleTheme: () => void
}

export default function Header({ content, isDarkMode, toggleTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Image src="/next.svg" alt="Next.js logo" width={80} height={20} className="dark:invert" />
          <span className="font-bold text-xl">{content.header["header.Title"]}</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#getting-started" className="text-sm font-medium hover:underline underline-offset-4">
            {content.header['header.GettingStarted']}
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1">
                {content.header["header.Features"]}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="https://nextjs.org/docs">{content.header.dropdown['dropdown.Documentation']}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="https://github.com/shadcn-ui/ui">{content.header.dropdown['dropdown.Shadcn']}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="https://ui.shadcn.com/docs">{content.header.dropdown['dropdown.Components']}</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex items-center gap-2">
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Switch checked={isDarkMode} onCheckedChange={toggleTheme} />
            <Moon className="h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </div>
          <Button asChild size="sm" variant="outline">
            <Link href="https://github.com" className="gap-1">
              <Github className="h-4 w-4" />
              {content.header['header.Github']}
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link href="#features" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              {content.header["header.Features"]}
            </Link>
            <Link href="#getting-started" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              {content.header['header.GettingStarted']}
            </Link>
            <Link
              href="https://nextjs.org/docs"
              className="text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {content.header.dropdown['dropdown.Documentation']}
            </Link>
            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Switch checked={isDarkMode} onCheckedChange={toggleTheme} />
              <Moon className="h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
