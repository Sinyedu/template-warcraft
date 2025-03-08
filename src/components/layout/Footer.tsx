import Link from "next/link"

interface FooterProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any
}

export default function Footer({ content }: FooterProps) {
  return (
    <footer className="border-t py-6 md:py-0 w-full">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4">
        <div className="flex items-center gap-4">
          <Link href="https://github.com" className="text-sm font-medium underline underline-offset-4">
            {content.footer["footer.Github"]}
          </Link>
          <Link href="https://twitter.com" className="text-sm font-medium underline underline-offset-4">
            {content.footer["footer.Twitter"]}
          </Link>
          <Link href="https://discord.com" className="text-sm font-medium underline underline-offset-4">
            {content.footer["footer.Discord"]}
          </Link>
        </div>
      </div>
    </footer>
  )
}

