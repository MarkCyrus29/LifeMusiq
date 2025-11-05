import {
  Radio,
  ListMusic,
  Zap,
  Heart,
  TrendingUp,
  Headphones,
  Sparkles,
  Play,
  ExternalLink,
  Music,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/Card";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-purple-950 to-slate-950">
      <Hero />
      <Features />
      <HowItWorks />
      <YouTubeChannels />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm">Coming Soon</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 bg-linear-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
              Your Life's Soundtrack, Perfectly Curated
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              minima sit optio est maxime consectetur iusto. Veniam doloribus
              est velit vitae ullam cupiditate minus dicta voluptates corrupti
              voluptatem, aperiam optio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                type="button"
                className="flex items-center justify-center gap-2 bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-3 rounded-full shadow-lg transition-all"
              >
                <Play className="w-5 h-5" />
                Explore Channels
              </button>
              <button
                type="button"
                className="border border-purple-500/50 text-purple-300 hover:bg-purple-500/10 text-lg px-8 py-3 rounded-full transition-all"
              >
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
              {[
                { value: "~~K+", label: "Playlists" },
                { value: "~~K+", label: "Subscribers" },
                { value: "~M+", label: "Songs Curated" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-[500px] lg:h-[600px] flex justify-center items-center">
            <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-30"></div>

            <div className="relative w-[90%] h-[90%] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1713801129175-8e60c67e0412?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGhlYWRwaG9uZXMlMjBncmFkaWVudHxlbnwxfHx8fDE3NjE5OTQ0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Music visualization"
                fill
                className="object-cover object-center rounded-3xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: Headphones,
    title: "Authentic Sound Experience",
    description:
      "Immerse yourself in high-quality audio crafted to enhance every beat and emotion in your music journey.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Radio,
    title: "Mood-Based Playlists",
    description:
      "Whether you're working, relaxing, or celebrating, we've got the perfect soundtrack for you.",
    gradient: "from-pink-500 to-orange-500",
  },
  {
    icon: ListMusic,
    title: "Curated Collections",
    description:
      "Expertly crafted playlists spanning genres, eras, and moods to suit every taste.",
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    icon: Zap,
    title: "Instant Discovery",
    description:
      "Find new music that matches your vibe in seconds. No more endless scrolling.",
    gradient: "from-yellow-500 to-green-500",
  },
  {
    icon: Heart,
    title: "Personal Touch",
    description:
      "Every playlist is crafted with care, blending creative energy with musical connection.",
    gradient: "from-green-500 to-blue-500",
  },
  {
    icon: TrendingUp,
    title: "Always Fresh",
    description:
      "Regular updates ensure you always have access to the latest and greatest music.",
    gradient: "from-blue-500 to-purple-500",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Why Choose LifeMusiq?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience music curation like never before with our powerful
            features
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-purple-500/20 p-6 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20 group"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-linear-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Browse our YouTube channels featuring thousands of carefully curated playlists.",
  },
  {
    number: "02",
    title: "Select",
    description:
      "Choose playlists that match your mood, activity, or musical preference.",
  },
  {
    number: "03",
    title: "Enjoy",
    description: "Sit back and let the music enhance every moment of your day.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">How It Works</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Getting started with LifeMusiq is simple and seamless
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-2xl text-white">{step.number}</span>
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden rounded-3xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 blur-2xl opacity-30"></div>
            <Image
              src="https://images.unsplash.com/photo-1520884225266-ebc9159f0aab?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=1200"
              alt="Vinyl records"
              fill
              className="object-cover rounded-3xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const channels = [
  {
    icon: Music,
    name: "--------------",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laudantium quas earum quibusdam fuga necessitatibus assumenda, ipsum magnam porro sint error reprehenderit vel veniam minus, odio quidem quia eaque repudiandae.",
    subscribers: "25K",
    playlists: "150+",
    link: "#",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Headphones,
    name: "--------------",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laudantium quas earum quibusdam fuga necessitatibus assumenda, ipsum magnam porro sint error reprehenderit vel veniam minus, odio quidem quia eaque repudiandae.",
    subscribers: "18K",
    playlists: "100+",
    link: "#",
    gradient: "from-pink-500 to-orange-500",
  },
  {
    icon: Radio,
    name: "--------------",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laudantium quas earum quibusdam fuga necessitatibus assumenda, ipsum magnam porro sint error reprehenderit vel veniam minus, odio quidem quia eaque repudiandae.",
    subscribers: "32K",
    playlists: "200+",
    link: "#",
    gradient: "from-blue-500 to-purple-500",
  },
];

export function YouTubeChannels() {
  return (
    <section id="channels" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-6">
            <Youtube className="w-5 h-5 text-red-400" />
            <span className="text-red-300">YouTube Channels</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Explore Our Channels
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Subscribe to our YouTube channels for endless musical inspiration
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {channels.map((channel, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-purple-500/20 p-8 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20 group"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-linear-to-r ${channel.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <channel.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl text-white mb-3">{channel.name}</h3>
              <p className="text-gray-400 mb-6">{channel.description}</p>

              <div className="flex gap-6 mb-8 text-sm">
                <div>
                  <div className="text-purple-400 font-semibold">
                    {channel.subscribers}
                  </div>
                  <div className="text-gray-500">Subscribers</div>
                </div>
                <div>
                  <div className="text-purple-400 font-semibold">
                    {channel.playlists}
                  </div>
                  <div className="text-gray-500">Playlists</div>
                </div>
              </div>

              <button
                type="button"
                // onClick={() => window.open(channel.link, "_blank")}
                className="w-full flex items-center justify-center gap-2 text-white font-semibold bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 py-3 px-6 rounded-xl shadow-md shadow-red-600/20 transition-all hover:scale-[1.02] active:scale-95"
              >
                <Youtube className="w-5 h-5" />
                Visit Channel
                <ExternalLink className="w-5 h-5" />
              </button>
            </Card>
          ))}
        </div>

        {/* CTA Banner */}
        <Card className="bg-linear-to-r from-purple-500/10 to-pink-500/10 border-purple-500/30 p-8 md:p-12 text-center ">
          <h3 className="text-3xl text-white mb-4">
            Don't Miss Out on New Releases
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to all our channels and be the first to discover new
            playlists, exclusive mixes, and hidden gems.
          </p>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-3 text-white font-semibold bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 py-3 px-10 rounded-xl shadow-lg shadow-pink-500/20 transition-all hover:scale-[1.03] active:scale-95"
          >
            <Youtube className="w-6 h-6" />
            Subscribe Now
          </button>
        </Card>
      </div>
    </section>
  );
}
