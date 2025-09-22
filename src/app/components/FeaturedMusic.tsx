'use client';

import Link from 'next/link';
import musicLibrary from '../../../public/data/music.json';

import { useEffect, useState } from 'react';
import { Button } from './ui/moving-border';
import { BackgroundGradient } from './ui/background-gradient';

interface Music {
  id: number;
  title: string;
  slug: string;
  artist: string;
  album: string;
  genre: string;
  year: number;
  duration: string;
  isFeatured?: boolean;
}

function FeaturedMusics() {
    const [musicData, setMusicData] = useState<Music[]>([]);

  useEffect(() => {
    fetch('/data/music.json')
      .then((res) => res.json())
      .then((data) => setMusicData(data.musicLibrary));
  }, []);


   const featuredMusics = musicData.filter((music) => music.isFeatured);

  return (
    <div className="py-12 bg-gray-900">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-12 tracking-wide animate-fadeIn">
          Featured Music
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Discover our handpicked selection of featured music tracks,
          showcasing a diverse range of genres and styles. Each track is
          chosen for its exceptional quality and unique sound, offering
          something special for every music lover.
        </p>
      </div>

      {/* Music Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {featuredMusics.map((music: Music) => (
          <div key={music.id} className="flex justify-center">
            <BackgroundGradient>
              <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {/* Music Title */}
                <p className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white truncate max-w-full">
                  {music.title}
                </p>

                {/* Album Name */}
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-1 truncate max-w-full">
                  {music.artist}
                </p>

                {/* Listen Now Button */}
                <Link href={`/musics/${music.slug}`} className="inline-block mt-4 w-full">
                  <Button
                    borderRadius="1.75rem"
                    containerClassName="h-12 w-full"
                    borderClassName="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
                    className="text-white dark:text-white font-medium text-sm sm:text-base"
                    duration={3000}
                  >
                    Listen Now
                  </Button>
                </Link>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>

      {/* Explore All Music Button */}
      <div className="mt-16 text-center">
        <Link href={'/musics'} className="inline-block">
          <Button
            borderRadius="1.75rem"
            containerClassName="h-16 w-44"
            borderClassName="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
            className="text-white dark:text-white font-semibold text-lg"
            duration={4000}
          >
            Explore Music
          </Button>
        </Link>
      </div>
    </div>

  );
}

export default FeaturedMusics;





// 'use client';

// import Link from 'next/link';
// import musicData from '.././data/music.json';
// import { Button } from './ui/moving-border';
// import { BackgroundGradient } from './ui/background-gradient';

// interface Music {
//   id: number;
//   title: string;
//   slug: string;
//   artist: string;
//   album: string;
//   genre: string;
//   year: number;
//   duration: string;
//   // coverUrl: string;
//   // audioUrl: string;
//   isFeatured?: boolean; // Optional property to indicate if the music is featured
// }

// function FeaturedMusics() {
//   const featuredMusics = musicData.musicLibrary.filter(
//     (music: Music) => music.isFeatured
//   );

//   return (
//     <div className="py-12 bg-gray-900">
//       <div>
//         <div className="text-center">
//           <h2 className="text-3xl font-extrabold text-white mb-4">
//             Featured Music
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Discover our handpicked selection of featured music tracks,
//             showcasing a diverse range of genres and styles. Each track is
//             chosen for its exceptional quality and unique sound, offering
//             something special for every music lover.
//           </p>
//         </div>
//       </div>
//       <div className="text-center">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
//           {featuredMusics.map((music: Music) => (
//             <div key={music.id} className="flex justify-center text-amber-50">
//               <BackgroundGradient>
//                 <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
//                   {/* Music Title */}
//                   <p className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white truncate max-w-full">
//                     {music.title}
//                   </p>

//                   {/* Album Name */}
//                   <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-1 truncate max-w-full">
//                     {music.album}
//                   </p>

//                   {/* Listen Now Button */}
//                   <Link
//                     href={`/musics/${music.slug}`}
//                     className="inline-block mt-4 px-5 py-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-white font-medium rounded-full shadow-md hover:scale-105 transition-transform duration-300"
//                   >
//                     Listen Now
//                   </Link>
//                 </div>
//               </BackgroundGradient>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="mt-20 text-center">
//         <Link href={'/musics'} className="inline-block">
//           <Button
//             borderRadius="1.75rem"
//             containerClassName="h-16 w-44"
//             borderClassName="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
//             className="text-white dark:text-white font-semibold text-lg"
//             duration={4000} // speed of moving border
//           >
//             Explore Music
//           </Button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default FeaturedMusics;
