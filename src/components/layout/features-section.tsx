interface FeaturesSectionProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content: any
  }
  
  export default function FeaturesSection({ content }: FeaturesSectionProps) {
    return (
      <section className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
            {content.subsection["subsection.Title"]}
          </h2>
          <p className="max-w-[750px] text-lg text-muted-foreground">{content.subsection["subsection.Subtitle"]}</p>
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
            <h3 className="text-xl font-bold">{content.subsection["subsection.FeatureTitle"]}</h3>
            <p className="text-sm text-muted-foreground">{content.subsection["subsection.FeatureDescription"]}</p>
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
            <h3 className="text-xl font-bold">{content.subsection["subsection.FeatureTitleTwo"]}</h3>
            <p className="text-sm text-muted-foreground">{content.subsection["subsection.FeatureDescriptionTwo"]}</p>
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
            <h3 className="text-xl font-bold">{content.subsection["subsection.FeatureTitleThree"]}</h3>
            <p className="text-sm text-muted-foreground">{content.subsection["subsection.FeatureDescriptionThree"]}</p>
          </div>
        </div>
      </section>
    )
  }
  
  