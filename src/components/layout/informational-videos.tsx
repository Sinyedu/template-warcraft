"use client"
import { Button } from "@/components/ui/button"
import { toast } from "sonner";

interface InformationalVideosSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any
}

export default function InformationalVideosSection({ content }: InformationalVideosSectionProps) {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
          {content.informationalVideos["informationalVideos.Title"]}
        </h2>
        <p className="max-w-[750px] text-lg text-muted-foreground">
          {content.informationalVideos["informationalVideos.Subtitle"]}
        </p>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
        {/* Video 1 */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/QAlklTOjkuk"  // Replace with actual video link
              title="How to Play: Intro"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <h3 className="text-xl font-bold">{content.informationalVideos["informationalVideos.VideoTitle1"]}</h3>
          <p className="text-sm text-muted-foreground">{content.informationalVideos["informationalVideos.VideoDescription1"]}</p>
        </div>

        {/* Video 2 */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"  // Replace with actual video link
              title="How to Play: Advanced Strategies"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <h3 className="text-xl font-bold">{content.informationalVideos["informationalVideos.VideoTitle2"]}</h3>
          <p className="text-sm text-muted-foreground">{content.informationalVideos["informationalVideos.VideoDescription2"]}</p>
        </div>

        {/* Video 3 */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/abcdefghijk"  // Replace with actual video link
              title="How to Play: Multiplayer Tips"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <h3 className="text-xl font-bold">{content.informationalVideos["informationalVideos.VideoTitle3"]}</h3>
          <p className="text-sm text-muted-foreground">{content.informationalVideos["informationalVideos.VideoDescription3"]}</p>
        </div>

        {/* Video 4 */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/lmnopqrstuv"  // Replace with actual video link
              title="How to Play: Game Modes"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <h3 className="text-xl font-bold">{content.informationalVideos["informationalVideos.VideoTitle4"]}</h3>
          <p className="text-sm text-muted-foreground">{content.informationalVideos["informationalVideos.VideoDescription4"]}</p>
        </div>
      </div>

      {/* Call to Action Button */}
      <div className="flex justify-center mt-12">
        <Button
          onClick={() => toast.success("Subscribed for more tips and tricks!")}
          className="text-lg"
        >
          {content.informationalVideos["informationalVideos.Subscribe"]}
        </Button>
      </div>
    </section>
  );
}
