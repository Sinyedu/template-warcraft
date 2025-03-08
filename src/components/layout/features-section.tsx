import { Heart } from 'lucide-react';
import { SunMoon } from 'lucide-react';
import { FolderOpen } from 'lucide-react';
import { SmilePlus } from 'lucide-react';
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
              <SmilePlus className="h-6 w-6 text-primary" />
          </div>
            <h3 className="text-xl font-bold">{content.subsection["subsection.FeatureTitle"]}</h3>
            <p className="text-sm text-muted-foreground">{content.subsection["subsection.FeatureDescription"]}</p>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-lg border p-6 text-center">
          <div className="rounded-full bg-primary/10 p-3">
              <FolderOpen className="h-6 w-6 text-primary" />
          </div>
            <h3 className="text-xl font-bold">{content.subsection["subsection.FeatureTitleTwo"]}</h3>
            <p className="text-sm text-muted-foreground">{content.subsection["subsection.FeatureDescriptionTwo"]}</p>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-lg border p-6 text-center">
          <div className="rounded-full bg-primary/10 p-3">
              <SunMoon className="h-6 w-6 text-primary" />
          </div>
            <h3 className="text-xl font-bold">{content.subsection["subsection.FeatureTitleThree"]}</h3>
            <p className="text-sm text-muted-foreground">{content.subsection["subsection.FeatureDescriptionThree"]}</p>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-lg border p-6 text-center">
            <div className="rounded-full bg-primary/10 p-3">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">{content.subsection["subsection.FeatureTitleFour"]}</h3>
            <p className="text-sm text-muted-foreground">{content.subsection["subsection.FeatureDescriptionFour"]}</p>
          </div>
        </div>
      </section>
    )
  }
  
  