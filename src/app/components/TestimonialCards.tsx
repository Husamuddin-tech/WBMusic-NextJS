"use client";

import { cn } from "../lib/utils";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const MusicTestimonials = [
  {
    quote:
      "This platform completely changed the way I enjoy music. The sound quality is unmatched!",
    name: "Sarah Johnson",
    title: "Music Enthusiast",
  },
  {
    quote:
      "I love how personalized the playlists are. It feels like the app knows me better than I know myself!",
    name: "David Kim",
    title: "Software Engineer",
  },
  {
    quote:
      "Being able to download tracks for offline listening is a lifesaver during my travels.",
    name: "Aisha Patel",
    title: "Frequent Traveler",
  },
  {
    quote:
      "Finally, I can listen to my favorite songs without annoying ads. Totally worth it!",
    name: "Michael Rodriguez",
    title: "Premium Subscriber",
  },
  {
    quote:
      "The global music library lets me discover songs from all around the world. It’s amazing!",
    name: "Liu Wei",
    title: "Student & Music Explorer",
  },
];

function MusicTestimonialCards() {
  return (
    <div className="relative flex h-[55rem] w-full items-center justify-center bg-black overflow-hidden">
      {/* Gradient glow layers */}
      <div className="absolute top-0 -left-40 w-[40rem] h-[40rem] rounded-full bg-purple-600/30 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 -right-40 w-[40rem] h-[40rem] rounded-full bg-cyan-500/30 blur-3xl animate-pulse delay-2000" />

      {/* Outer background grid */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)]"
        )}
      />

      {/* Radial mask effect */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_25%,black)]"></div>

      {/* Content */}
      <div className="h-[45rem] w-full relative flex flex-col items-center justify-center px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-12 tracking-wide animate-fadeIn">
          Hear Our Harmony: Voices of Success
        </h2>

        {/* Testimonial Card */}
        <div
          className="h-[40rem] w-full max-w-6xl mx-auto rounded-2xl flex flex-col antialiased 
          bg-black/80 backdrop-blur-md border border-gray-800
          [background-size:40px_40px] 
          [background-image:linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)] 
          items-center justify-center relative overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.8)] hover:shadow-[0_0_45px_rgba(0,255,255,0.4)] transition-all duration-500"
        >
          <InfiniteMovingCards
            items={MusicTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default MusicTestimonialCards;
