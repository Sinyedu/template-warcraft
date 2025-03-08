"use client"

import { useState } from "react"
import { toast } from "sonner"
import content from "@/data/content.json"
import Header from "@/components/layout/Header"
import FeaturesSection from "@/components/layout/features-section"
import NewsletterSection from "@/components/layout/newsletter-section"
import Footer from "@/components/layout/Footer"
import TeamSection from "@/components/layout/team-section"


export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
    toast.success(`Switched to ${isDarkMode ? "light" : "dark"} mode`)
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""} flex justify-center items-center`}>
      <div className="flex flex-col min-h-screen w-full max-w-[1400px] bg-background text-foreground">
        {/* Header */}
        <Header content={content} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

        <main className="flex-1">
          {/* Features Section */}
          <FeaturesSection content={content} />

          {/* Newsletter Section */}
          <NewsletterSection content={content} />

          {/* Team Section */}
          <TeamSection content={content} />
        </main>

        {/* Footer */}
        <Footer content={content} />
      </div>
    </div>
  )
}

