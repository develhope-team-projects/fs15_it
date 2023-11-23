"use client";

import { useRef, useState } from "react";
import ReactPlayer from "react-player";

export default function HeroMultisection() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playlist, setPlaylist] = useState<File[]>([]);
  const [selectedAudio, setSelectedAudio] = useState<File | null>(null);
  const playerRef = useRef<ReactPlayer | null>(null);

  const handleAudioFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setIsPlaying(false);
      setPlaylist((prevPlaylist) => [...prevPlaylist, file]);
    }
  };

  const handleAudioItemClick = (selected: File) => {
    setSelectedAudio(selected);
    setIsPlaying(false);
  };

  const handlePlay = () => {
    setIsPlaying(true);
    if (playerRef.current) {
      playerRef.current.seekTo(0);
    }
  };

  return (
    <div className="hero bg-[#0c111c] flex justify-center max-lg:h-full ">
      <div className=" flex justify-between p-6 text-white max-lg:w-full max-lg:flex-col mt-14">
        <div className="audio-upload flex flex-col">
          <label
            className="text-4xl bg-blue-800 rounded-3xl p-5 mb-10 max-lg:text-3xl text-center"
            htmlFor="audio"
          >
            Importa la tua canzone
          </label>
          <input
            type="file"
            accept="audio/*"
            onChange={handleAudioFileChange}
            id="audio"
          />
          <h1 className="text-4xl bg-blue-800 rounded-3xl p-5 mb-10 max-lg:text-3xl text-center mt-14">
            Seleziona e ascolta la tua canzone
          </h1>
          <h2 className="text-sub-header font-body text-center mb-8">
            Playlist:
          </h2>
          {playlist.length > 0 && (
            <div className="playlist flex gap-6 max-md:flex-col ">
              <ul className="flex flex-col gap-8 ">
                {playlist.map((song, index) => (
                  <li
                    key={index}
                    onClick={() => handleAudioItemClick(song)}
                    className={`flex items-center  gap-4 justify-start cursor-pointer max-md:text-center ${
                      selectedAudio === song ? "text-purple-400" : ""
                    }`}
                  >
                    {song.name}
                  </li>
                ))}
              </ul>
              {selectedAudio && (
                <div className="audio-player self-center">
                  <ReactPlayer
                    url={URL.createObjectURL(selectedAudio)}
                    controls
                    playing={isPlaying}
                    onPlay={handlePlay}
                    width={"350px"}
                    height={"50px"}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
