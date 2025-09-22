'use client';

import { AnimatedTooltip } from "./ui/animated-tooltip"
import { WavyBackground } from "./ui/wavy-background"


function Artists() {

    const artist = [
    {
      "id": 1,
      "name": "Ariana Vale",
      "designation": "Pop Singer",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6OHJC1ARA73SFxXMCuxbEYAzwsUEmk4kncA&s"
    },
    {
      "id": 2,
      "name": "Marco Rey",
      "designation": "Rock Guitarist",
      "image": "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 3,
      "name": "Lina Torres",
      "designation": "Jazz Vocalist",
      "image": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 4,
      "name": "The Midnight Hour",
      "designation": "Indie Band",
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
]


  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-amber-50 font-bold text-center mb-8">Meet the Artists</h2>
            <p className="text-base md:text-lg text-white text-center mb-4 ">Step into the world of our talented artists. From rising stars to established icons, discover the passion and creativity behind their music.</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={artist} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default Artists