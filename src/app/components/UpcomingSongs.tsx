'use client';
import Link from 'next/link';
import { HoverEffect } from './ui/card-hover-effect';

function UpcomingSongs() {

const upcomingMusic = [
    {
      "title": "Starlight Dreams",
      "description": "An ethereal mix of synth and vocals, perfect for late-night vibes.",
      "slug": "starlight-dreams",
      "isFeatured": true
    },
    {
      "title": "Electric Pulse",
      "description": "High-energy electronic beats to get you moving on the dance floor.",
      "slug": "electric-pulse"
    },
    {
      "title": "Sunset Serenade",
      "description": "A calm acoustic track that captures the beauty of the setting sun.",
      "slug": "sunset-serenade",
      "isFeatured": true
    },
    {
      "title": "Midnight Groove",
      "description": "Smooth jazz-infused rhythms for your late-night relaxation.",
      "slug": "midnight-groove"
    },
    {
      "title": "Cosmic Voyage",
      "description": "Ambient soundscapes that transport you to another dimension.",
      "slug": "cosmic-voyage",
      "isFeatured": true
    },
    {
      "title": "Rhythm of the Rain",
      "description": "A soothing melody inspired by the gentle sound of rainfall.",
      "slug": "rhythm-of-the-rain"
    }
  ]



  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-4 tracking-wide animate-fadeIn drop-shadow-[0_4px_30px_rgba(0,255,255,0.3)]">
            Upcoming Music
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-300 dark:text-gray-400 tracking-wide mt-2">
            <span>🎵</span>
            <span>Next Hits You Can&#39;t Miss</span>
          </p>
        </div>

        <div className='mt-10'>
          <HoverEffect items={upcomingMusic.map(music => (
            {
              title: music.title,
              description: music.description,
              link: '/'
            }
          ))} />
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            View All Songs
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingSongs;
