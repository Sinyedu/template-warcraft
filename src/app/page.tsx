"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"
import { ChevronDown, Github, Menu, Moon, Sun } from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import content from '@/data/content.json';


export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
    toast.success(`Switched to ${isDarkMode ? "light" : "dark"} mode`)
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""} flex justify-center items-center`}>
      <div className="flex flex-col min-h-screen w-full max-w-[1400px] bg-background text-foreground">
        {/* Header */}
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

        <main className="flex-1">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
            <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
              <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
                {content.home["home.Title"]}
              </h1>
              <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
                {content.home['home.Subtitle']}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button size="lg">{content.home['home.GetStarted']}</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>{content.dialog['dialog.Title']}</AlertDialogTitle>
                      <AlertDialogDescription>
                      {content.dialog['dialog.Description']}
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>
                        {content.dialog['dialog.Cancel']}
                      </AlertDialogCancel>
                      <AlertDialogAction onClick={() => toast.success("Template cloned successfully!")}>
                      {content.dialog['dialog.CloneRepository']}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                <Button variant="outline" size="lg" onClick={() => toast.info("Documentation opened")}>
                  {content.home['home.Documentation']}
                </Button>
              </div>
            </div>
          </section>



          {/* Features Section */}
          <section className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
            <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">{content.subsection['subsection.Title']}</h2>
              <p className="max-w-[750px] text-lg text-muted-foreground">
              {content.subsection['subsection.Subtitle']}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 mt-12 mx-auto max-w-[980px]">
              <div className="flex flex-col items-center gap-2 rounded-lg border p-6 text-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">
                  {content.subsection['subsection.FeatureTitle']}
                </h3>
                <p className="text-sm text-muted-foreground">
                {content.subsection['subsection.FeatureDescription']}
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-lg border p-6 text-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1" />
                    <path d="M2 13h10" />
                    <path d="m9 16 3-3-3-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">
                  {content.subsection['subsection.FeatureTitleTwo']}
                </h3>
                <p className="text-sm text-muted-foreground">
                {content.subsection['subsection.FeatureDescriptionTwo']}
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-lg border p-6 text-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L12 3Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">
                  {content.subsection['subsection.FeatureTitleThree']}
                </h3>
                <p className="text-sm text-muted-foreground">
                {content.subsection['subsection.FeatureDescriptionThree']}
                </p>
              </div>
            </div>
          </section>

          {/* Getting Started Section */}
          <section className="container mx-auto px-4 py-12 md:py-24 lg:py-32 bg-muted/50">
            <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">{content.templatestarter['templatestarter.Title']}</h2>
              <p className="max-w-[750px] text-lg text-muted-foreground">
              {content.templatestarter['templatestarter.Subtitle']}
              </p>
            </div>
            <div className="mx-auto max-w-[980px] mt-12 px-4">
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-background">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">
                      {content.templatestarter['templatestarter.Clone']}
                    </h3>
                    <p className="text-muted-foreground">
                    {content.templatestarter['templatestarter.CloneSubTitle']}
                    </p>
                    <pre className="mt-2 rounded-md bg-slate-950 p-4 overflow-x-auto text-sm text-slate-50 dark:bg-slate-900">
                      <code>{content.templatestarter['templatestarter.CloneRepository']}</code>
                    </pre>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-background">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">
                      {content.templatestarter['templatestarter.Install']}
                    </h3>
                    <p className="text-muted-foreground">
                    {content.templatestarter['templatestarter.InstallSubTitle']}
                    </p>
                    <pre className="mt-2 rounded-md bg-slate-950 p-4 overflow-x-auto text-sm text-slate-50 dark:bg-slate-900">
                      <code>
                        {content.templatestarter['templatestarter.InstallDependencies']}
                      </code>
                    </pre>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-background">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">
                      {content.templatestarter['templatestarter.Run']}
                    </h3>
                    <p className="text-muted-foreground">
                    {content.templatestarter['templatestarter.RunSubTitle']}
                    </p>
                    <pre className="mt-2 rounded-md bg-slate-950 p-4 overflow-x-auto text-sm text-slate-50 dark:bg-slate-900">
                      <code>
                        {content.templatestarter['templatestarter.RunServer']}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
            <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
                {content.newsletter['newsletter.Title']}
              </h2>
              <p className="max-w-[750px] text-lg text-muted-foreground">
              {content.newsletter['newsletter.Subtitle']}
              </p>
              <div className="w-full max-w-md flex flex-col sm:flex-row gap-2 mt-4">
                <Input type="email" placeholder="Enter your email" className="flex-1" />
                <Button onClick={() => toast.success("Subscribed to newsletter!")}>
                  {content.newsletter['newsletter.Subscribe']}
                </Button>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="container mx-auto px-4 py-12 md:py-24 lg:py-32 bg-muted/50">
            <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">Our Team</h2>
              <p className="max-w-[750px] text-lg text-muted-foreground">Meet the people behind this template.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 max-w-[980px] mx-auto px-4">
              <div className="flex flex-col items-center gap-2">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Team member" />
                  <AvatarFallback>SEN</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold">{content.team['team.MemberOne']}</h3>
                <p className="text-sm text-muted-foreground">{content.team['team.ProffesionOne']}</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Team member" />
                  <AvatarFallback>BVG</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold">{content.team['team.MemberFour']}</h3>
                <p className="text-sm text-muted-foreground">{content.team['team.ProffesionOne']}</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Team member" />
                  <AvatarFallback>AL</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold">{content.team['team.MemberThree']}</h3>
                <p className="text-sm text-muted-foreground">{content.team['team.ProffesionTwo']}</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Team member" />
                  <AvatarFallback>IB</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold">{content.team['team.MemberTwo']}</h3>
                <p className="text-sm text-muted-foreground">{content.team['team.ProffesionTwo']}</p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t py-6 md:py-0 w-full">
          <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built with{" "}
              <a href="https://nextjs.org" className="font-medium underline underline-offset-4">
                Next.js
              </a>{" "}
              and{" "}
              <a href="https://ui.shadcn.com" className="font-medium underline underline-offset-4">
                shadcn/ui
              </a>
              .
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://github.com" className="text-sm font-medium underline underline-offset-4">
                {content.footer['footer.Github']}
              </Link>
              <Link href="https://twitter.com" className="text-sm font-medium underline underline-offset-4">
                {content.footer['footer.Twitter']}
              </Link>
              <Link href="https://discord.com" className="text-sm font-medium underline underline-offset-4">
                {content.footer['footer.Discord']}
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

