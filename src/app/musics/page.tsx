'use client';

import Image from "next/image";

import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import musicLibrary from '../../../public/data/music.json';

function Page() {
  const allMusics = musicLibrary.musicLibrary;

  return (
    <div className="min-h-screen bg-black py-12 pt-36 px-6">
      {/* Page Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-12 text-center">
        All Musics ({allMusics.length})
      </h1>

      {/* Individual CardContainers for each music */}
      <div className="flex flex-wrap justify-center gap-8">
        {allMusics.map((music) => (
          <CardContainer key={music.id} className="w-80">
            <CardBody className="bg-gray-900 relative group w-full h-auto rounded-2xl p-6 shadow-xl border border-black/[0.2] hover:shadow-purple-500/50 transition-all">
              {/* Title */}
              <CardItem translateZ={30} className="text-xl font-bold text-white line-clamp-1">
                {music.title}
              </CardItem>

              {/* Artist */}
              <CardItem as="p" translateZ={40} className="text-gray-400 text-sm mt-2 line-clamp-1">
                {music.artist}
              </CardItem>

              {/* Cover Image */}
              <CardItem translateZ={50} className="w-full mt-4">
                <Image
                  src={music.coverUrl}
                  alt={`${music.title} cover`}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardItem>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-6">
                <CardItem
                  translateZ={20}
                  as="a"
                  href={music.audioUrl}
                  target="_blank"
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 transition"
                >
                  Listen →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-white text-black hover:bg-gray-200 transition"
                >
                  Save
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default Page;
