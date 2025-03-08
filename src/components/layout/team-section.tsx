import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TeamSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any
}

export default function TeamSection({ content }: TeamSectionProps) {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">{content.team['team.Title']}</h2>
        <p className="max-w-[750px] text-lg text-muted-foreground">{content.team['team.Subtitle']}</p>
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
            <AvatarFallback>HK</AvatarFallback>
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
  )
}
