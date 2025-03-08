"use client"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface NewsletterSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any
}

export default function NewsletterSection({ content }: NewsletterSectionProps) {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
          {content.newsletter["newsletter.Title"]}
        </h2>
        <p className="max-w-[750px] text-lg text-muted-foreground">{content.newsletter["newsletter.Subtitle"]}</p>
        <div className="w-full max-w-md flex flex-col sm:flex-row gap-2 mt-4">
          <Input type="email" placeholder={content.newsletter["newsletter.EmailPlaceholder"]} className="flex-1" />
          <Button onClick={() => toast.success("Subscribed to newsletter!")}>
            {content.newsletter["newsletter.Subscribe"]}
          </Button>
        </div>
      </div>
    </section>
  )
}

