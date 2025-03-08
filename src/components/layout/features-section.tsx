import content from "@/data/content.json"
interface FeaturesSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
}

export default function FeaturesSection({ }: FeaturesSectionProps) {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
      {/* Mock YouTube Video */}
      <div className="flex justify-center mt-12">
        <iframe
          className="w-full h-[400px] rounded-lg"
          src="https://www.youtube.com/embed/QAlklTOjkuk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Showcase Twitch Streams */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-center mb-8">{content.streams['streams.Title']}</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 mx-auto max-w-[980px]">
          {/* Stream 1 */}
          <div className="flex flex-col items-center gap-2 rounded-lg border p-6 text-center">
            <div className="relative w-full h-0 pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                // TODO Replace with real Twitch channel
                src="https://player.twitch.tv/?channel=example_channel_1"
                frameBorder="0"
                scrolling="no"
                allowFullScreen={true}
              />
            </div>
          </div>

          {/* Stream 2 */}
          <div className="flex flex-col items-center gap-2 rounded-lg border p-6 text-center">
            <div className="relative w-full h-0 pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                // TODO Replace with real Twitch channel
                src="https://player.twitch.tv/?channel=example_channel_2"
                frameBorder="0"
                scrolling="no"
                allowFullScreen={true}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-lg border p-6 text-center">
            <div className="relative w-full h-0 pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                // TODO Replace with real Twitch channel
                src="https://player.twitch.tv/?channel=example_channel_3" 
                frameBorder="0"
                scrolling="no"
                allowFullScreen={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
