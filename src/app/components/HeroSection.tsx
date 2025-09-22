import Link from "next/link";
import React from "react";
import { Button } from "./ui/moving-border";
import { WavyBackground } from "./ui/wavy-background";

function HeroSection() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      


      {/* Content */}
      <div className="p-4 relative z-10 text-center w-full">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-[0_0_10px_rgb(0,255,255)] animate-pulse">
          Music Explorer
        </h1>

        <p className="text-center mt-6 max-w-2xl mx-auto text-base md:text-lg text-white/70 leading-relaxed tracking-wide animate-fadeIn">
          Music is for everyone — it transcends language, culture, and age.
          Whether it’s the energy of <span className="text-cyan-400">rock</span>,
          the rhythm of <span className="text-purple-400">hip-hop</span>, the soul
          of <span className="text-pink-400">jazz</span>, or the calm of{" "}
          <span className="text-indigo-400">classical</span>, every genre carries
          emotions that connect us. No matter your taste, music has something to
          offer for all.
        </p>

        <div className="mt-4">
  <Link href={"/musics"} className="inline-block">
    <Button
      borderRadius="1.75rem"
      containerClassName="h-16 w-44"
      borderClassName="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
      className="text-white dark:text-white font-semibold text-lg"
      duration={4000} // speed of moving border
    >
      Explore Music
    </Button>
  </Link>
</div>
      </div>
    </div>
    </WavyBackground>
  );
}

export default HeroSection;






// import Link from 'next/link'
// import React from 'react'
// import { Spotlight } from './ui/Spotlight'

// function HeroSection() {
//   return (
//     <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
//       <Spotlight
//   className="absolute -top-40 left-0 md:-top-20 md:left-60 w-[600px] h-[600px] -z-10"
//   fill="white"
// />

//         <div className='p-4 relative z-10 text-center w-full'>
//             <h1 className='text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-[0_0_10px_rgb(0,255,255)] animate-pulse'>Music Explorer</h1>
            
//         <p className="text-center mt-6 max-w-2xl mx-auto text-base md:text-lg text-white/70 leading-relaxed tracking-wide animate-fadeIn">
//   Music is for everyone — it transcends language, culture, and age.
//   Whether it’s the energy of <span className="text-cyan-400">rock</span>,
//   the rhythm of <span className="text-purple-400">hip-hop</span>, the soul
//   of <span className="text-pink-400">jazz</span>, or the calm of{" "}
//   <span className="text-indigo-400">classical</span>, every genre carries
//   emotions that connect us. No matter your taste, music has something to
//   offer for all.
// </p>

//         <div className='mt-4'>
//             <Link href={"/musics"} className='px-6 py-3 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-black font-semibold rounded-full shadow-lg hover:scale-105 transition-transform inline-block'>
//                 Explore Music
//             </Link>
//         </div>

//         </div>
//     </div>
//   )
// }

// export default HeroSection