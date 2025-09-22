"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const musicContent = [
    {
      "title": "High-Quality Sound",
      "description": "Experience crystal-clear audio with our advanced sound engineering and optimized streaming technology."
    },
    {
      "title": "Curated Playlists",
      "description": "Discover handpicked playlists tailored to your mood, genre preferences, and listening history."
    },
    {
      "title": "Ad-Free Listening",
      "description": "Enjoy uninterrupted music with our premium, ad-free streaming experience."
    },
    {
      "title": "Offline Access",
      "description": "Download your favorite tracks and playlists to enjoy music anytime, even without internet."
    },
    {
      "title": "Personalized Recommendations",
      "description": "Get music suggestions powered by AI, designed to match your unique taste."
    },
    {
      "title": "Global Music Library",
      "description": "Access millions of tracks from around the world, from trending hits to timeless classics."
    }
  ]


 
function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicContent} />
    </div>
  )
}

export default WhyChooseUs